import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/Layout";

// eslint-disable-next-line
export default () => (
  <Layout>
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <svg 
            className="w-16 h-16 mx-auto text-primary mb-4" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
              clipRule="evenodd" 
            />
          </svg>
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl mb-4">
            You're on the list!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for joining our Professional plan waiting list. We'll notify you 
            as soon as it becomes available with early access and special pricing.
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            What happens next?
          </h2>
          <ul className="text-left text-gray-600 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              You'll receive a confirmation email shortly
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              We'll notify you when Professional plan launches
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              You'll get early access and special pricing
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.kappaml.com/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Try Starter Plan (Free)
          </a>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 border border-gray-300 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  </Layout>
); 