import React from "react";
import Layout from "../components/Layout";

const TermsPage = () => (
  <Layout>
    <section className="prose lg:prose-lg max-w-none">
      <h1 className="text-3xl font-semibold text-center text-gray-900 sm:text-4xl lg:text-5xl">
        Terms and Conditions
      </h1>
      <div className="mt-8">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using KappaML's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>

        <h2>2. Description of Service</h2>
        <p>
          KappaML provides automated machine learning solutions for streaming data. Our services include but are not limited to data processing, model training, and real-time predictions.
        </p>

        <h2>3. User Obligations</h2>
        <p>
          Users must:
        </p>
        <ul>
          <li>Provide accurate and complete information when using our services</li>
          <li>Maintain the security of their account credentials</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Use the services only for lawful purposes</li>
        </ul>

        <h2>4. Intellectual Property</h2>
        <p>
          All content, features, and functionality of KappaML services are owned by KappaML and are protected by international copyright, trademark, and other intellectual property laws.
        </p>

        <h2>5. Data Usage</h2>
        <p>
          We process user data in accordance with our Privacy Policy. By using our services, you grant KappaML the right to collect and analyze data related to your use of the services.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          KappaML shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the services.
        </p>

        <h2>7. Modifications to Service</h2>
        <p>
          KappaML reserves the right to modify or discontinue the service with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
        </p>

        <h2>8. Termination</h2>
        <p>
          KappaML reserves the right to terminate or suspend access to our services immediately, without prior notice, for any violation of these Terms or for any other reason we deem appropriate.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which KappaML operates, without regard to its conflict of law provisions.
        </p>

        <h2>10. Contact Information</h2>
        <p>
          For any questions about these Terms and Conditions, please contact us through our contact page.
        </p>

        <h2>11. Refund Policy</h2>
        <p>
          If you are not satisfied with a paid subscription to KappaML, you may request a refund within 14 days of your initial purchase, provided there has not been substantial usage of the service during that period. Refunds for renewals are generally not offered; you can cancel auto-renewal at any time and your access will continue until the end of the current billing cycle.
        </p>
        <p>
          To request a refund, please contact us through our contact page with your account email, purchase date, and reason for the request. We will review eligibility and respond promptly. Where required by applicable law, you may have additional rights, which are not affected by this policy.
        </p>
        <p>
          Purchases made through third-party marketplaces or resellers are subject to their respective refund policies and must be handled directly with the seller.
        </p>

        <p className="mt-8 text-sm text-gray-500">
          Last updated: {new Date().toISOString().split('T')[0]}
        </p>
      </div>
    </section>
  </Layout>
);

export default TermsPage; 