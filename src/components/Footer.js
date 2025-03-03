import { Link } from "gatsby";
import * as React from "react";
import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="p-8 text-gray-400 bg-gray-800">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-7">
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
            <div className="mb-2 uppercase">Company</div>
            <Link to="/about" className="mt-2">About</Link>
            <Link to="/contact" className="mt-2">Contact</Link>
            <Link to="/about#careers" className="mt-2">Careers</Link>
            <Link to="/terms" className="mt-2">Terms</Link>
            <Link to="/privacy" className="mt-2">Privacy</Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 uppercase">Community</div>
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
            <Link to="/partners" className="mt-2">Partners</Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 uppercase">Developers</div>
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
            <div className="mb-2 uppercase">Subscribe to our newsletter</div>
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
                <input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-2 mr-3 text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
                  placeholder="Your email" 
                />
                <button type="submit" className="px-6 py-2 text-white bg-primary rounded-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-800">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="pt-8 mt-8 text-center border-t border-gray-700">
          <p> &copy; {new Date().getFullYear()} KappaML. Built with 🩵 in Enschede, The Netherlands.</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
