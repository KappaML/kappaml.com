import React from "react";
import Layout from "../components/Layout";

const PrivacyPage = () => (
  <Layout>
    <section className="prose lg:prose-lg max-w-none">
      <h1 className="text-3xl font-semibold text-center text-gray-900 sm:text-4xl lg:text-5xl">
        Privacy Policy
      </h1>
      <div className="mt-8">
        <h2>1. Introduction</h2>
        <p>
          At KappaML, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>We may collect:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Payment information</li>
          <li>Usage data and analytics</li>
        </ul>

        <h3>2.2 Technical Data</h3>
        <p>We automatically collect:</p>
        <ul>
          <li>IP addresses</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage patterns and preferences</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve and personalize user experience</li>
          <li>Process transactions</li>
          <li>Send administrative information</li>
          <li>Provide customer support</li>
          <li>Ensure security and prevent fraud</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
        </p>

        <h2>5. Data Sharing and Disclosure</h2>
        <p>We may share your information with:</p>
        <ul>
          <li>Service providers and business partners</li>
          <li>Law enforcement when required by law</li>
          <li>Third parties with your consent</li>
        </ul>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to data processing</li>
          <li>Data portability</li>
        </ul>

        <h2>7. Cookies and Tracking</h2>
        <p>
          We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>

        <h2>9. International Data Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers.
        </p>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us through our contact page.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: {new Date().toISOString().split('T')[0]}
        </p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPage; 