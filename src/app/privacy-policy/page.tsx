import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for BestJacuzziHotels.com — how we handle your data, cookies, and affiliate links.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">
        Last updated: March 17, 2026
      </p>

      <div className="space-y-8 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Introduction
          </h2>
          <p>
            BestJacuzziHotels.com ("we," "us," or "our") respects your privacy
            and is committed to protecting your personal data. This privacy
            policy explains how we collect, use, and safeguard information when
            you visit our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Information We Collect
          </h2>
          <p className="mb-3">
            We do not collect personal information directly. However, the
            following data may be collected automatically when you visit our
            site:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent on pages,
              referring URLs, browser type, device type, and IP address.
            </li>
            <li>
              <strong>Cookies:</strong> Small text files stored on your device to
              improve your browsing experience and help us understand how our
              site is used.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Affiliate Links & Booking.com
          </h2>
          <p>
            Our site contains affiliate links to Booking.com and potentially
            other travel booking platforms. When you click on these links and
            make a purchase or reservation, we may earn a commission at no
            additional cost to you. Booking.com has its own privacy policy that
            governs how they handle your data once you leave our site. We
            encourage you to review Booking.com's privacy policy before making
            any reservations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Cookies & Tracking
          </h2>
          <p className="mb-3">We use the following types of cookies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential Cookies:</strong> Required for the website to
              function properly.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Help us understand how visitors
              interact with our website (e.g., Google Analytics).
            </li>
            <li>
              <strong>Affiliate Cookies:</strong> Used by our affiliate partners
              (such as Booking.com) to track referrals and attribute commissions.
              These cookies may persist for 30 days or more after your visit.
            </li>
          </ul>
          <p className="mt-3">
            You can control cookies through your browser settings. Disabling
            cookies may affect the functionality of certain features on our
            website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Third-Party Services
          </h2>
          <p>
            We may use third-party services such as Google Analytics and Google
            Search Console to analyze website traffic and improve our content.
            These services may collect information sent by your browser,
            including cookies and your IP address. Please refer to their
            respective privacy policies for more information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Data Retention
          </h2>
          <p>
            We retain automatically collected data (such as analytics data) for
            up to 26 months. Affiliate tracking cookies are managed by our
            affiliate partners and are subject to their retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics tracking</li>
            <li>Withdraw consent for cookie usage</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Children's Privacy
          </h2>
          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
            <span className="text-blue-600 font-medium">
              hello@bestjacuzzihotels.com
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
