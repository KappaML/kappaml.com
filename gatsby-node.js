const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Add schema customization to ensure fields exist
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      templateKey: String
      date: Date @dateformat
      featuredpost: Boolean
      featuredimage: File @fileByRelativePath
      description: String
      tags: [String]
      full_image: File @fileByRelativePath
      image: File @fileByRelativePath
      heading: String
      subheading: String
      mainpitch: Mainpitch
      intro: Intro
      main: Main
      testimonials: [Testimonials]
      pricing: Pricing
    }
    type Fields {
      slug: String
    }
    type Mainpitch {
      title: String
      description: String
    }
    type Intro {
      blurbs: [Blurbs]
      heading: String
      description: String
    }
    type Blurbs {
      image: File @fileByRelativePath
      text: String
    }
    type Main {
      heading: String
      description: String
      image1: Image
      image2: Image
      image3: Image
    }
    type Image {
      alt: String
      image: File @fileByRelativePath
    }
    type Testimonials {
      author: String
      quote: String
    }
    type Pricing {
      heading: String
      description: String
      plans: [Plans]
    }
    type Plans {
      description: String
      items: [String]
      plan: String
      price: String
    }
  `
  createTypes(typeDefs)
}
