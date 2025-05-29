import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="container px-4 py-16 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl mb-6">
              Join the Professional Plan Waiting List
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Be the first to know when our Professional plan becomes available. 
              We'll notify you as soon as it launches with early access and special pricing.
            </p>
          </div>
          
          <form
            name="waitlist"
            method="post"
            action="/waitlist/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="max-w-2xl mx-auto"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="waitlist" />
            <div hidden>
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"name"} className="block mb-2 text-sm font-medium text-gray-700">
                Your name *
              </label>
              <div>
                <input
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"email"} className="block mb-2 text-sm font-medium text-gray-700">
                Email *
              </label>
              <div>
                <input
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"company"} className="block mb-2 text-sm font-medium text-gray-700">
                Company
              </label>
              <div>
                <input
                  type={"text"}
                  name={"company"}
                  onChange={this.handleChange}
                  id={"company"}
                  required={false}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="Company name"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"use_case"} className="block mb-2 text-sm font-medium text-gray-700">
                Primary use case
              </label>
              <div>
                <select
                  name={"use_case"}
                  onChange={this.handleChange}
                  id={"use_case"}
                  required={false}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                >
                  <option value="">Select your primary use case</option>
                  <option value="recommendation_systems">Recommendation Systems</option>
                  <option value="fraud_detection">Fraud Detection</option>
                  <option value="predictive_analytics">Predictive Analytics</option>
                  <option value="real_time_personalization">Real-time Personalization</option>
                  <option value="iot_forecasting">(I)IoT Forecasting</option>
                  <option value="anomaly_detection">Anomaly Detection</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"expected_volume"} className="block mb-2 text-sm font-medium text-gray-700">
                Expected prediction volume
              </label>
              <div>
                <select
                  name={"expected_volume"}
                  onChange={this.handleChange}
                  id={"expected_volume"}
                  required={false}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                >
                  <option value="">Select expected volume</option>
                  <option value="0-100_per_second">0-100 predictions/second</option>
                  <option value="100-500_per_second">100-500 predictions/second</option>
                  <option value="500-1000_per_second">500-1,000 predictions/second</option>
                  <option value="1000+_per_second">1,000+ predictions/second</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor={"additional_info"} className="block mb-2 text-sm font-medium text-gray-700">
                Additional information
              </label>
              <div>
                <textarea
                  name={"additional_info"}
                  onChange={this.handleChange}
                  id={"additional_info"}
                  required={false}
                  rows={3}
                  className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="Tell us more about your project or any specific requirements..."
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="inline-flex items-center" htmlFor={"updates"}>
                <input
                  type="checkbox"
                  name={"updates"}
                  onChange={this.handleChange}
                  id={"updates"}
                  required={false}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700">
                  Keep me informed about KappaML news and product updates.
                </span>
              </label>
            </div>
            
            <div>
              <button 
                className="w-full px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-300" 
                type="submit"
              >
                Join Waiting List
              </button>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
} 