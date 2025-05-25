import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Features from "../components/Features";
import CLIDemo from "../components/CLIDemo";
import AnimatedGlassCard from "../components/AnimatedGlassCard";
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
        <motion.h1 
          className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {title}
        </motion.h1>
      </section>

      <section className="flex justify-center p-4 text-center">
        <motion.h2 
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {heading}
        </motion.h2>
      </section>

      <section className="flex items-center justify-center my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.a
            className="button"
            href="https://app.kappaml.com/login"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started
          </motion.a>
          <motion.div className="inline-block ml-6">
            <Link 
              to="/contact" 
              className="hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us for a demo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* <section className="my-16">
        <GatsbyImage className="w-full border rounded-lg shadow-lg" image={heroImage} alt="Hero Image Kappa Architecture Diagram" />
      </section> */}

      <section className="my-8 h-[750px]">
        <CLIDemo />
      </section>

      <section className="my-16">
        <h3 className="my-6 text-3xl font-semibold text-gray-900">
          {intro.heading}
        </h3>
        <p className="text-xl">
          {intro.description}
        </p>
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
        <motion.h1 
          className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {frontmatter.title}
        </motion.h1>
      </section>

      <section className="flex justify-center p-4 text-center">
        <motion.h2 
          className="text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {frontmatter.heading}
        </motion.h2>
      </section>

      <section className="flex items-center justify-center my-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.a
            className="button"
            href="https://app.kappaml.com/login"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get started
          </motion.a>
          <motion.div className="inline-block ml-6">
            <Link 
              to="/contact" 
              className="hover:underline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact us for a demo
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className="my-8 h-[750px]">
        <CLIDemo />
      </section>

      <section className="my-16">
          <AnimatedGlassCard>
            <h3 className="my-6 text-3xl font-semibold text-gray-900">
              {frontmatter.intro.heading}
          </h3>
          <p className="text-xl">
            {frontmatter.intro.description}
          </p>
          <Features features={frontmatter.intro.blurbs} />
        </AnimatedGlassCard>
      </section>
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
