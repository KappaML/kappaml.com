import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import elninoLogo from "../img/partners/elnino-logo.svg";

export default function PartnersPage() {
  return (
    <Layout>
      <div className="container px-2 py-8 sm:px-4 sm:py-12 lg:py-16 mx-auto">
        <h1 className="mb-4 sm:mb-6 lg:mb-8 text-4xl font-semibold dark:text-white">Our partners</h1>
        
        {/* Featured Partner Section */}
        <div className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg">
          <div className="flex flex-col items-start md:flex-row md:items-center">
            <a 
              href="https://elnino.tech/?utm_source=kappaml&utm_medium=partners&utm_campaign=implementation_partner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mb-6 md:mb-0 md:mr-8"
            >
              <img 
                src={elninoLogo} 
                alt="El Niño" 
                className="w-48 dark:invert"
              />
            </a>
            <div>
              <h2 className="mb-4 text-2xl font-semibold dark:text-white">El Niño</h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                As our implementation partner, El Niño is a digital agency that helps organizations 
                quickly adopt and integrate KappaML into their existing systems. With their broad 
                range of services and demonstrated expertise in online machine learning, they ensure 
                a smooth transition to real-time ML capabilities.
              </p>
              <a 
                href="https://elnino.tech/?utm_source=kappaml&utm_medium=partners&utm_campaign=implementation_partner" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80"
              >
                Learn more about El Niño →
              </a>
            </div>
          </div>
        </div>

        {/* Become a Partner Section */}
        <div className="p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold dark:text-white">Become a Partner</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-300">
            Are you interested in partnering with KappaML? We're always looking for organizations 
            that share our vision of making machine learning accessible and effective for streaming data.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/80"
          >
            Contact us to learn more
          </Link>
        </div>
      </div>
    </Layout>
  );
} 