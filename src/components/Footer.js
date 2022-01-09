import { Link } from "gatsby";
import * as React from "react";
import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-8 text-gray-400 bg-gray-800">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="KappaML"
              className="w-32"
            />
            <div className="my-4">
              Automated Machine Learning for Streaming Data.
            </div>
          </div>
          <div className="flex col-span-2 space-x-32">
            <div className="flex flex-col">
              <div className="mb-2 font-bold uppercase">Company</div>
              <Link to="/about" className="mt-1">About</Link>
              <Link to="/blog" className="mt-1">Blog</Link>
              <Link to="/about#careers" className="mt-1">Careers</Link>
            </div>
            <div className="flex flex-col">
              <div className="mb-2 font-bold uppercase">Community</div>
              <a href="https://github.com/KappaML"
                target="_blank"
                rel="noopener noreferrer">GitHub
              </a>
              <a href="https://www.linkedin.com/company/kappaml"
                target="_blank"
                rel="noopener noreferrer">LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 font-bold uppercase">Subscribe to our newsletter</div>
            <p className="mt-1 mb-2">
              Subscribe to our newsletter for the latest news and product updates.
            </p>
            <form name="newsletter" method="POST" data-netlify="true">
              <div className="flex">
                <input type="email" name="email" required className="mr-2 rounded-lg" />
                <button type="submit" className="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p> &copy; 2022 KappaML. All rights reserved.</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
