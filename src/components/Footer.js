import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-800 text-gray-400 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div>
            <img
              src={logo}
              alt="KappaML"
              className="w-32"
            />
            <div className="my-4">
              Automated Machine Learning as a Service for Streaming Data.
            </div>
          </div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
          <div className="flex flex-col"></div>
        </div>
        <div class="text-center border-t border-gray-700 pt-8">
          <p> &copy; 2022 KappaML. All rights reserved.</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
