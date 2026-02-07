const DynamicPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-700 mt-24">
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        <header className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="mt-1 text-sm text-gray-600">
            <strong>LM Dynamic Prices</strong> · Last updated: February 2026
          </p>
        </header>

        <p className="mt-6">
          This privacy policy describes how LM Dynamic Prices ("the App") collects, uses,
          and protects information. It applies to merchants who install the App and to
          visitors of stores that use the App.
        </p>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">1. Who we are</h2>
          <p className="mt-2">
            The App is operated by Lumoonix (or the legal entity that operates the App).
            For privacy and data requests, contact us at{" "}
            <strong>info@lumoonix.com</strong>.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            2. Data we collect and how we use it
          </h2>

          <h3 className="mt-4 text-base font-semibold text-gray-900">Merchant and shop data</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              We receive and store <strong>shop configuration and store information</strong>{" "}
              via the Shopify Admin API and Shopify metafields (for example, pricing rules
              and settings stored in shop metafields).
            </li>
            <li>
              <strong>Purpose:</strong> To provide the App&apos;s features (dynamic prices by
              location, customer, inventory, device, and time) and to operate the App for
              your store.
            </li>
            <li>
              When a merchant uninstalls or when Shopify requests it, we process{" "}
              <strong>shop data erasure</strong> via the shop/redact webhook.
            </li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-gray-900">
            Store visitor and end-customer data
          </h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Logged-in customers:</strong> When a customer is logged in to a store
              that uses the App, the storefront may use customer data (such as first name,
              last name, email, addresses, tags, order count, total spent, phone, and similar
              fields) <strong>in the visitor&apos;s browser only</strong> to apply pricing rules.
              This data is provided by Shopify to the store&apos;s theme and is not sent by the
              App to our servers for this purpose.
            </li>
            <li>
              <strong>Checkout and draft orders:</strong> When the App is used to create a
              draft order at checkout, we receive <strong>cart data and customer identifiers</strong>{" "}
              (for example, email and customer ID) at our backend so we can create the order
              and complete checkout. draft order is only for shopify non plus shopify plan only. for plus plan we dont create draft orders.
            </li>
            <li>
              <strong>Purpose:</strong> To show the correct prices to the right customer and
              to complete purchases. We respond to <strong>customer data requests</strong>{" "}
              and <strong>customer data erasure</strong> via Shopify&apos;s webhooks
              (customers/data_request and customers/redact).
            </li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-gray-900">Location data</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              To show <strong>location-based prices</strong>, the App obtains the visitor&apos;s{" "}
              <strong>country and region</strong> using an IP-based location service. The result is{" "}
              <strong>cached in the visitor&apos;s browser</strong> (localStorage) for about{" "}
              <strong>4 hours</strong> and is not stored on our servers.
            </li>
            <li>
              <strong>Purpose:</strong> To display prices that match the visitor&apos;s location
              (e.g. by country or state).
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">3. How we store data</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Our servers:</strong> We store App configuration, data needed for draft
              orders and checkout, and data required to respond to Shopify compliance webhooks on
              our infrastructure (Lumoonix).
            </li>
            <li>
              <strong>Visitor&apos;s device:</strong> Location data is only cached locally in the
              visitor&apos;s browser (localStorage) for about 4 hours; we do not store location data
              on our servers.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">4. Local storage and cookies</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              The App uses <strong>one localStorage key</strong>:{" "}
              <code className="rounded bg-gray-100 px-1 py-0.5 text-sm">
                lmDynamicPricingUserLocation
              </code>
              . It stores a short-lived cache of country/region (about 4 hours) to reduce repeated
              location requests.
            </li>
            <li>
              The App <strong>does not set cookies</strong>. Your store (including Shopify, your
              theme, or other apps) may use its own cookies; those are governed by your store&apos;s
              privacy policy.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">5. Sharing and third parties</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Shopify:</strong> We use Shopify as the platform and for checkout. Data is
              processed in line with Shopify&apos;s policies and our agreement with Shopify.
            </li>
            <li>
              <strong>Lumoonix:</strong> Our backend and the IP-based location service are operated
              by us (or our service provider) to run the App.
            </li>
            <li>
              We <strong>do not sell</strong> personal data. We share data only as needed to operate
              the App, comply with law, or enforce our terms.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">6. Data retention</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              We retain merchant and shop data, and customer-related data that we store, for as long
              as the App is installed and as required for <strong>legal and compliance</strong>{" "}
              purposes (including responding to data and erasure requests via Shopify webhooks).
            </li>
            <li>
              <strong>Location cache</strong> in the visitor&apos;s browser expires after about 4
              hours and is not retained on our servers.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Your rights (GDPR, CCPA, and others)
          </h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              <strong>Merchants and end customers</strong> may request access, correction, deletion,
              or portability of their data. We respond to Shopify&apos;s customers/data_request and
              customers/redact (and shop/redact for shop data) as part of our compliance.
            </li>
            <li>
              You may also contact us at <strong>info@lumoonix.com</strong> for privacy or data
              requests.
            </li>
            <li>
              <strong>CCPA:</strong> We do not sell personal information.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">8. Security</h2>
          <p className="mt-2">
            We use industry-standard measures to protect data (including secure APIs and compliance
            with Shopify&apos;s app requirements). For reporting security issues, see our Security
            policy.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">9. Changes to this policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. The "Last updated" date at the top
            will be revised when we do. Continued use of the App after changes constitutes acceptance
            of the updated policy. You can also find the current policy in the App listing or at a
            URL we publish for that purpose.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">10. Contact</h2>
          <div className="mt-2 rounded-lg bg-gray-100 p-4">
            <p>For privacy questions, data requests, or erasure:</p>
            <p className="mt-2">
              <strong>Email:</strong>{" "}
              <a className="text-blue-600 hover:underline" href="mailto:info@lumoonix.com">
                info@lumoonix.com
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-10 border-t border-gray-200 pt-4 text-sm text-gray-600">
          <p>
            LM Dynamic Prices · Privacy Policy ·{" "}
            <a className="text-blue-600 hover:underline" href="https://site.pwamg.shop">
              MG Pro
            </a>
          </p>
        </footer>
      </div>
    </div>
    </div>
  );
};

export default DynamicPolicy;
