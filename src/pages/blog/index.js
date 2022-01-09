import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <h1 className="pb-8 text-3xl font-bold text-center text-gray-900 sm:text-4xl lg:text-5xl">
            KappaML Blog
          </h1>
          <p className="my-8 text-xl text-center text-gray-500"></p>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
