const LmCartLivePolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-700 mt-24">
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
          <header className="border-b border-gray-200 pb-4">
            <h1 className="text-2xl font-semibold text-gray-900">Privacy Policy</h1>
            <p className="mt-1 text-sm text-gray-600">
              <strong>LM Cart Live</strong> · Last updated: April 2026
            </p>
          </header>

          <p className="mt-6">
            This privacy policy describes how LM Cart Live (&quot;the App&quot;) collects, uses, and
            protects information. It applies to merchants who install the App and to visitors of
            stores that use the App.
          </p>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">1. Who we are</h2>
            <p className="mt-2">
              The App is operated by Lumoonix (or the legal entity that operates the App). For
              privacy and data requests, contact us at <strong>info@lumoonix.com</strong>.
            </p>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">2. What the App does</h2>
            <p className="mt-2">
              LM Cart Live provides live cart experiences on your Shopify storefront—for example,
              real-time cart updates, visibility of cart state, and related storefront features you
              configure in the App. The exact features depend on your settings and Shopify plan.
            </p>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">3. Data we collect and how we use it</h2>

            <h3 className="mt-4 text-base font-semibold text-gray-900">Merchant and shop data</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>
                We receive and store <strong>shop configuration and store information</strong> via
                the Shopify Admin API and app storage (for example, App settings, metafields, or
                identifiers needed to link the App to your store).
              </li>
              <li>
                <strong>Purpose:</strong> To provide the App&apos;s features, authenticate your
                store, and operate the service.
              </li>
              <li>
                When a merchant uninstalls or when Shopify requests it, we process{" "}
                <strong>shop data erasure</strong> via the shop/redact webhook where applicable.
              </li>
            </ul>

            <h3 className="mt-4 text-base font-semibold text-gray-900">Store visitors and cart data</h3>
            <ul className="mt-2 list-disc pl-5">
              <li>
                To power <strong>live cart</strong> behavior, the App may process{" "}
                <strong>cart-related data</strong> such as line items, quantities, cart identifiers,
                or session information, including in the visitor&apos;s browser and, where needed, on
                our servers to synchronize or display cart state you enable.
              </li>
              <li>
                <strong>Logged-in customers:</strong> Where your store and the App use customer
                context (for example, customer ID or account-linked cart behavior), we process such
                data only as needed to provide the features you configure and in line with
                Shopify&apos;s platform rules.
              </li>
              <li>
                <strong>Purpose:</strong> To show accurate cart information and live updates on your
                storefront. We respond to <strong>customer data requests</strong> and{" "}
                <strong>customer data erasure</strong> via Shopify&apos;s compliance webhooks
                (customers/data_request and customers/redact) where we store customer personal data.
              </li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">4. How we store data</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                <strong>Our servers:</strong> We may store configuration, operational logs limited to
                running the App, and data required to provide live cart features and to respond to
                Shopify compliance webhooks on our infrastructure (Lumoonix).
              </li>
              <li>
                <strong>Visitor devices:</strong> The storefront or theme integration may use{" "}
                <strong>browser storage</strong> (for example, localStorage or sessionStorage) only as
                needed for cart state or performance of live updates; specifics depend on your theme
                and App settings.
              </li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">5. Cookies and similar technologies</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                The App may rely on <strong>Shopify&apos;s storefront cookies</strong> or similar
                mechanisms that your store already uses for carts and sessions. Your store (including
                Shopify, your theme, or other apps) may set additional cookies; those are governed
                by your store&apos;s privacy policy.
              </li>
              <li>
                We do <strong>not</strong> use advertising cookies through the App for cross-site
                tracking.
              </li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">6. Sharing and third parties</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                <strong>Shopify:</strong> We use Shopify as the platform. Data is processed in line
                with Shopify&apos;s policies and our agreement with Shopify.
              </li>
              <li>
                <strong>Lumoonix:</strong> Our backend and services are operated by us (or our
                subprocessors) to run the App.
              </li>
              <li>
                We <strong>do not sell</strong> personal data. We share data only as needed to
                operate the App, comply with law, or enforce our terms.
              </li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">7. Data retention</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                We retain merchant and shop data, and customer-related data that we store, for as
                long as the App is installed and as required for <strong>legal and compliance</strong>{" "}
                purposes (including responding to data and erasure requests via Shopify webhooks).
              </li>
            </ul>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">8. Your rights (GDPR, CCPA, and others)</h2>
            <ul className="mt-2 list-disc pl-5">
              <li>
                <strong>Merchants and end customers</strong> may request access, correction,
                deletion, or portability of their data. We respond to Shopify&apos;s
                customers/data_request and customers/redact (and shop/redact for shop data) as part
                of our compliance.
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
            <h2 className="text-lg font-semibold text-gray-900">9. Security</h2>
            <p className="mt-2">
              We use industry-standard measures to protect data (including secure APIs and
              compliance with Shopify&apos;s app requirements).
            </p>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">10. Changes to this policy</h2>
            <p className="mt-2">
              We may update this privacy policy from time to time. The &quot;Last updated&quot; date
              at the top will be revised when we do. Continued use of the App after changes
              constitutes acceptance of the updated policy. You can also find the current policy in
              the App listing or at a URL we publish for that purpose.
            </p>
          </section>

          <section className="mt-7">
            <h2 className="text-lg font-semibold text-gray-900">11. Contact</h2>
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
              LM Cart Live · Privacy Policy ·{" "}
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

export default LmCartLivePolicy;
