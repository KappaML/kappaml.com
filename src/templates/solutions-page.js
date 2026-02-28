import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const SolutionsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="py-12">
      <article className="prose lg:prose-lg max-w-none dark:prose-invert">
        <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-8">
          {title}
        </h1>
        <PageContent content={content} />
      </article>
    </section>
  );
};

SolutionsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const SolutionsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SolutionsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

SolutionsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SolutionsPage;

export const solutionsPageQuery = graphql`
  query SolutionsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`; 