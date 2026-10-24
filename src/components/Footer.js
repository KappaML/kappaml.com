import { Link } from "gatsby";
import * as React from "react";
import logo from "../img/logo.svg";

const aiPrompt =
  "I want to clearly understand what I get when I use KappaML and how it compares with other machine learning and AutoML solutions. Read https://www.kappaml.com/llms.txt, then explain it simply.";

const aiSummaryLinks = [
  {
    name: "ChatGPT",
    url: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    url: `https://www.perplexity.ai/search?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    url: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
      </svg>
    ),
  },
];

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
            <div className="mt-6">
              <span className="block text-sm text-gray-400 mb-2">
                Get an AI summary of KappaML
              </span>
              <div className="flex items-center space-x-2">
                {aiSummaryLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask ${item.name} about KappaML`}
                    title={item.name}
                    className="inline-flex items-center justify-center w-9 h-9 border border-gray-700 rounded-md bg-gray-700/50 hover:bg-gray-700 hover:border-gray-500 text-gray-300 hover:text-white transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 uppercase">Company</div>
            <Link to="/about" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">About</Link>
            <Link to="/contact" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">Contact</Link>
            <Link to="/about#careers" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">Careers</Link>
            <Link to="/terms" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">Terms</Link>
            <Link to="/privacy" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">Privacy</Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 uppercase">Community</div>
            <a href="https://github.com/KappaML"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">
              GitHub
            </a>
            <a href="https://www.linkedin.com/company/kappaml"
              target="_blank"
              rel="noopener noreferrer" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">
              LinkedIn
            </a>
            <Link to="/partners" className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">Partners</Link>
          </div>
          <div className="flex flex-col">
            <div className="mb-2 uppercase">Developers</div>
            <a href="https://api.kappaml.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">
              OpenAPI Docs
            </a>
            <a href="https://api.kappaml.com/redoc"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">
              ReDocs
            </a>
            <a href="https://status.kappaml.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-gray-400 hover:text-white dark:hover:text-primary">
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
                  className="w-full px-4 py-2 mr-3 text-gray-200 bg-gray-700 dark:bg-gray-900 border border-gray-600 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" 
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
