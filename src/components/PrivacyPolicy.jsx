
const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen pt-20">
      {/* Header */}
      <header className="bg-gray-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-center">Privacy Policy</h1>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-12">
          {/* Last Updated */}
          <p className="text-gray-600 text-sm lg:text-base text-right">
            <strong>Last Updated:</strong> 29/10/2024
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">Introduction</h2>
            <p>
              Thank you for using <strong>MG Pro PWA app for Shopify</strong>. This Privacy Policy
              explains how we collect, use, and protect your information when you use our services
              to convert your Shopify store into a Progressive Web Application (PWA). By using our
              App, you agree to the terms outlined in this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Information We Collect
            </h2>
            <p>To provide you with our services, we may collect the following types of information:</p>
            <ol className="list-decimal pl-6">
              <li>
                <strong>Store Information:</strong> When you install and use our App, we collect
                basic information about your store, such as your Shopify store name, store ID, and
                other essential details required to enable PWA functionality.
              </li>
              <li>
                <strong>Cookies:</strong> To enhance your store's functionality and provide a
                seamless PWA experience, our App may place cookies on your storefront. These cookies
                are used for:
                <ul className="list-disc pl-6 mt-2">
                  <li>Session management</li>
                  <li>User preferences</li>
                  <li>Analytics to monitor the PWA's performance on your store</li>
                </ul>
              </li>
            </ol>
            <p className="mt-4">
              <strong>Note:</strong> No sensitive customer information (such as credit card
              information) is collected or stored by our App.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              How We Use Your Information
            </h2>
            <p>We use the information collected solely to operate and improve the App’s functionality, including:</p>
            <ul className="list-disc pl-6">
              <li>Enabling PWA features on your Shopify store</li>
              <li>Customizing user experience based on store-specific settings</li>
              <li>Monitoring the App's performance and ensuring its reliability on your storefront</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">Data Security</h2>
            <p>
              We take data security seriously. All data collected is encrypted and stored securely.
              We implement industry-standard practices to protect your information from
              unauthorized access, disclosure, alteration, or destruction.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Third-Party Services
            </h2>
            <p>
              Our App does not share or sell your information to any third parties. However, it may
              include integrations with third-party services strictly to enhance functionality. Each
              third-party service has its privacy policies, and we encourage you to review them.
            </p>
          </section>

          {/* Changes to this Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">
              Changes to this Privacy Policy
            </h2>
            <p>
              We reserve the right to update this Privacy Policy to reflect changes in our practices
              or for other operational, legal, or regulatory reasons. Any changes will be posted on
              this page, with the updated date indicated.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:gaurangdholariya2@gmail.com"
                  className="text-gray-700 underline"
                >
                  gaurangdholariya2@gmail.com
                </a>
              </li>
            </ul>
            <p className="mt-4">
              By continuing to use our App, you agree to this Privacy Policy. We encourage you to
              review it periodically.
            </p>
          </section>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
