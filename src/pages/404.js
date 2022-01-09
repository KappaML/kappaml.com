import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section>
      <h1 className="my-6 text-4xl font-bold">PAGE NOT FOUND</h1>
      <p className="my-6 text-xl font-semibold">You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/" className="text-blue-500">Go back home</Link>
    </section>
  </Layout>
);

export default NotFoundPage;
