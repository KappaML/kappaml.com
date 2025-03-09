import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import CLIDemo from "../components/CLIDemo";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  intro,
}) => {
  return (
    <>
      <section className="flex justify-center my-8 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </section>

      <section className="flex justify-center p-4 text-center">
        <h2 className="text-xl md:text-2xl">
          {heading}
        </h2>
      </section>

      <section className="flex items-center justify-center my-8">
        <a
          className="button"
          href="https://app.kappaml.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
        <Link to="/contact" className="ml-6 hover:underline">
          Contact us for more info
        </Link>
      </section>

      {/* <section className="my-16">
        <GatsbyImage className="w-full border rounded-lg shadow-lg" image={heroImage} alt="Hero Image Kappa Architecture Diagram" />
      </section> */}

      <section className="my-8">
        <CLIDemo />
      </section>

      <section className="my-16">
        <h3 className="my-6 text-3xl font-bold text-gray-900">
          {intro.heading}
        </h3>
        <p className="text-xl">{intro.description}</p>
        <Features features={intro.blurbs} />
      </section>
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout noContainer>
      <section className="flex justify-center my-8 text-center">
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
          {frontmatter.title}
        </h1>
      </section>

      <section className="flex justify-center p-4 text-center">
        <h2 className="text-xl md:text-2xl">
          {frontmatter.heading}
        </h2>
      </section>

      <section className="flex items-center justify-center my-8">
        <a
          className="button"
          href="https://app.kappaml.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get started
        </a>
        <Link to="/contact" className="ml-6 hover:underline">
          Contact us for more info
        </Link>
      </section>

      <section className="my-8">
        <CLIDemo />
      </section>

      <div className="content-container">
        <section className="my-16">
          <h3 className="my-6 text-3xl font-bold text-gray-900">
            {frontmatter.intro.heading}
          </h3>
          <p className="text-xl">{frontmatter.intro.description}</p>
          <Features features={frontmatter.intro.blurbs} />
        </section>
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            name
            text
          }
          heading
          description
        }
      }
    }
  }
`;
