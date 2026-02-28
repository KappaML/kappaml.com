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
        <section>
          <h1 className="text-3xl font-semibold text-center text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">Contact us</h1>
          <p className="my-8 text-xl text-center text-gray-500 dark:text-gray-400">Send us a message using the form below and we will contact you back soon.</p>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
            className="max-w-2xl mx-auto my-8"
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don't fill this out:{" "}
                <input name="bot-field" onChange={this.handleChange} />
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor={"name"} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Your name
              </label>
              <div>
                <input
                  type={"text"}
                  name={"name"}
                  onChange={this.handleChange}
                  id={"name"}
                  required={true}
                  className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor={"email"} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <div>
                <input
                  type={"email"}
                  name={"email"}
                  onChange={this.handleChange}
                  id={"email"}
                  required={true}
                  className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor={"phone"} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <div>
                <input
                  type={"tel"}
                  name={"phone"}
                  onChange={this.handleChange}
                  id={"phone"}
                  required={false}
                  className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="+31 6 1234 5678"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor={"company"} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Company
              </label>
              <div>
                <input
                  type={"text"}
                  name={"company"}
                  onChange={this.handleChange}
                  id={"company"}
                  required={false}
                  className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor={"message"} className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <div>
                <textarea
                  name={"message"}
                  onChange={this.handleChange}
                  id={"message"}
                  required={true}
                  rows={4}
                  className="w-full px-4 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary focus:outline-none"
                  placeholder="How can we help you?"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="inline-flex items-center" htmlFor={"newsletter"}>
                <input
                  type="checkbox"
                  name={"newsletter"}
                  onChange={this.handleChange}
                  id={"newsletter"}
                  required={false}
                  className="w-4 h-4 text-primary bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Keep me informed with about KappaML news and updates.</span>
              </label>
            </div>
            <div>
              <button 
                className="w-full px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" 
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </Layout>
    );
  }
}
