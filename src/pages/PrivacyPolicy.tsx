import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 text-white leading-relaxed">
        {/* Back */}
        <div className="mt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm underline text-gray-300 hover:text-white transition"
            aria-label="Go back to home"
          >
            <span aria-hidden>
              <br></br>← Back to Home<br></br>
            </span>
          </Link>
        </div>

        <br></br>

        <h1 className="text-4xl font-bold mb-6">
          Privacy Policy for Obo Car Controller App
        </h1>

        <p className="mb-4">
          This privacy policy explains how we collect, use, and disclose your
          information when you use the Obo Car Controller mobile application
          (referred to as "the App").
        </p>

        <p className="mb-4">
          We, RoboticGen (Pvt) Ltd, are committed to protecting your privacy and
          ensuring transparency about how your data is handled.
        </p>

        <p className="mb-4">
          By using the App, you consent to the practices described in this
          Privacy Policy. If you do not agree, please discontinue using the App.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Summary</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            We collect limited data needed for core functionality (e.g.,
            Bluetooth connectivity, device information).
          </li>
          <li>We do not sell your personal information.</li>
          <li>
            We may use third-party services (e.g., Firebase) for analytics and
            crash reporting.
          </li>
          <li>We comply with privacy laws such as GDPR and COPPA.</li>
          <li>
            Users can request access, correction, or deletion of their data.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Information We Collect
        </h2>
        <h3 className="text-xl font-semibold mt-4 mb-1">
          1. Information You Provide
        </h3>
        <p className="mb-4">
          If you contact us for support, we may collect your email address and
          issue details solely for support purposes. This data is retained only
          as long as needed to resolve your issue.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-1">
          2. Information Collected Automatically
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Device Information:</strong> Device model, OS version,
            unique device identifiers (UDID), and IP address.
          </li>
          <li>
            <strong>App Usage Data:</strong> Commands sent, features used, crash
            logs, and performance metrics.
          </li>
          <li>
            <strong>Bluetooth Connection Data:</strong> Required for pairing
            with your robot car.
          </li>
          <li>
            <strong>Cookies or Similar Technologies:</strong> For functionality
            and performance improvements.
          </li>
        </ul>
        <p className="mb-4">
          We collect this data only to maintain and improve the App's core
          functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Permissions We Require
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Bluetooth:</strong> To scan and connect to your robot car.
          </li>
          <li>
            <strong>Location (Required by Android for BLE):</strong> Only for
            BLE scanning; we do not collect or store precise location data.
          </li>
          <li>
            <strong>Storage (if applicable):</strong> To save configuration
            files or logs on your device; data is not shared externally.
          </li>
        </ul>
        <p className="mb-4">
          We do not use permissions for advertising or unrelated purposes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>To provide and maintain the App’s functionality</li>
          <li>To improve performance and fix technical issues</li>
          <li>To respond to support requests</li>
          <li>To ensure security and comply with legal obligations</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          How We Share Your Information
        </h2>
        <p className="mb-4">
          We do not sell your data. Limited sharing may occur with:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            Third-Party Services: For analytics and crash reporting (e.g.,
            Firebase, Google Analytics)
          </li>
          <li>Legal Authorities: If required by law</li>
          <li>Business Transfers: If our company is merged or acquired</li>
        </ul>
        <p className="mb-4">
          Third-party providers are required to comply with strict
          confidentiality and data protection standards.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Third-Party Services
        </h2>
        <p className="mb-4">
          We use trusted services for analytics and crash reporting:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <a
              className="underline"
              href="https://www.google.com/policies/privacy/partners/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="underline"
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firebase Privacy Policy
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Data Retention & Deletion
        </h2>
        <p className="mb-4">
          Usage data is retained for improving app functionality. Support emails
          are deleted after the issue is resolved. Users can request data
          deletion by emailing us at{" "}
          <a href="mailto:hello@roboticgen.co" className="underline">
            hello@roboticgen.co
          </a>
          . Requests are processed within 30 days.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Security</h2>
        <p className="mb-4">
          We use industry-standard security measures. However, no method of
          transmission or storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Children’s Privacy</h2>
        <p className="mb-4">
          We do not knowingly collect data from children under 13 years. The App
          complies with the Children’s Online Privacy Protection Act (COPPA). If
          you believe we have inadvertently collected such data, contact us for
          immediate deletion.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          International Data Transfers
        </h2>
        <p className="mb-4">
          By using the App outside our hosting region, your data may be
          transferred internationally in compliance with applicable laws.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Your Rights</h2>
        <p className="mb-4">
          If you are covered under GDPR or similar regulations, you may request
          access, correction, deletion, or restriction of data processing.
          Contact us at{" "}
          <a href="mailto:hello@roboticgen.co" className="underline">
            hello@roboticgen.co
          </a>{" "}
          for requests.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Continued use of the
          App after updates indicates acceptance of the new policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Contact Us</h2>
        <p>
          For privacy-related inquiries, email us at{" "}
          <a href="mailto:hello@roboticgen.co" className="underline">
            hello@roboticgen.co
          </a>
          .
        </p>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
