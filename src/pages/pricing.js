import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for startups and experimentation",
      features: [
        "Up to 100 predictions/second",
        "Basic AutoML algorithms",
        "REST API access",
        "Basic monitoring dashboard",
        "Model checkpointing & rollback",
        "Up to 2 concurrent models"
      ],
      cta: "Get started",
      ctaLink: "https://app.kappaml.com",
      coming: false,
      external: true
    },
    {
      name: "Professional",
      price: "€199",
      priceUnit: "/month",
      description: "Ideal for production applications and growing teams",
      features: [
        "Up to 1,000 predictions/second",
        "Advanced AutoML algorithms",
        "Advanced model monitoring",
        "Automatic model versioning",
        "Alerts on model performance",
        "Priority email support",
        "Up to 10 concurrent models",
      ],
      cta: "Get a demo",
      ctaLink: "https://app.kappaml.com/signup?plan=professional",
      coming: true,
      external: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale deployments with custom requirements",
      features: [
        "Unlimited predictions",
        "Custom algorithm development",
        "Dedicated support team",
        "On-premise deployment options",
        "Custom integrations",
        "Unlimited concurrent models",
        "Advanced security & compliance",
        "Custom SLA agreements",
        "Training & onboarding",
        "24/7 phone support"
      ],
      cta: "Contact us",
      ctaLink: "/contact",
      coming: false,
      external: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <Layout>
      <div className="container px-4 py-16 mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="mb-4 text-4xl font-semibold text-gray-900 sm:text-5xl lg:text-6xl">
            Pricing plans
          </h1>
          <p className="mx-auto text-xl text-gray-600 max-w-3xl">
            Choose the perfect plan for your online machine learning needs. 
            Start free and scale as you grow.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid gap-8 lg:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative p-8 bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.coming 
                  ? 'border-primary ring-4 ring-primary/20 scale-105' 
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              {plan.coming && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Coming soon
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.priceUnit && (
                    <span className="text-gray-600 ml-1">
                      {plan.priceUnit}
                    </span>
                  )}
                </div>
                <p className="text-gray-600">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg 
                      className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {!plan.coming && <div className="text-center">
                {plan.external ? (
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.coming
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <Link
                    to={plan.ctaLink}
                    className={`inline-block w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.coming
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                )}
              </div>}
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What counts as a prediction?
                </h3>
                <p className="text-gray-600">
                  A prediction is counted each time your model processes a single set of features 
                  and returns a result.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take 
                  effect immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial?
                </h3>
                <p className="text-gray-600">
                  The Starter plan is completely free forever and offers a good representation of our platform.
                  There is no free trial for the Professional plan, but you can get a free 
                  demo by <Link to="/contact" className="text-primary hover:underline">contacting us</Link>.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What happens if I exceed my limits?
                </h3>
                <p className="text-gray-600">
                  We'll notify you when you approach your limits. For the Starter plan, 
                  predictions will be throttled. Paid plans have overage protection 
                  and automatic scaling options.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer custom solutions?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We offer custom solutions for both Professional and Enterprise customers in collaboration with 
                  our <Link to="/partners" className="text-primary hover:underline">partners</Link>.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What support do you provide?
                </h3>
                <p className="text-gray-600">
                  Support varies by plan: basic email support for Starter, priority email 
                  for Professional, and dedicated support teams with 24/7 phone access 
                  for Enterprise customers, depending on needs and budget.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center p-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the developers who are already building intelligent applications 
            with KappaML's online machine learning platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.kappaml.com/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start free today
            </a>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default PricingPage; 