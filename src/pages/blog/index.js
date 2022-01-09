import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section>
          <h1 className="text-5xl font-bold text-center text-gray-900">KappaML Blog Posts</h1>
          <p className="my-6 text-xl text-center text-gray-500"></p>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
