import { Link } from "gatsby";
import * as React from "react";
import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-8 text-gray-400 bg-gray-800">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-7">
          <div className="col-span-2">
            <img
              src={logo}
              alt="KappaML"
              className="w-32"
            />
            <div className="my-4">
              Automated Machine Learning for Streaming Data.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 font-bold uppercase">Company</div>
            <Link to="/about" className="mt-2">About</Link>
            <Link to="/contact" className="mt-2">Contact</Link>
            <Link to="/about#careers" className="mt-2">Careers</Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 font-bold uppercase">Community</div>
            <a href="https://github.com/KappaML"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              GitHub
            </a>
            <a href="https://www.linkedin.com/company/kappaml"
              target="_blank"
              rel="noopener noreferrer" className="mt-2">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 font-bold uppercase">Developers</div>
            <a href="https://api.kappaml.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              OpenAPI Docs
            </a>
            <a href="https://api.kappaml.com/redoc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              ReDocs
            </a>
            <a href="https://status.kappaml.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2">
              Status
            </a>
          </div>
          <div className="flex flex-col col-span-2">
            <div className="mb-2 font-bold uppercase">Subscribe to our newsletter</div>
            <p className="mt-2 mb-2">
              Subscribe to our newsletter for the latest news and product updates.
            </p>
            <form
              name="newsletter"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/">
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="form-name" value="newsletter" />
              <div hidden>
                <label>
                  Don't fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="flex">
                <input type="email" name="email" required className="mr-3 rounded-lg" />
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
