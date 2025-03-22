
const CurrencyPrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6 bg-white text-gray-700 mt-24">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy for MG Currency Converter Pro</h1>
        <p className="text-sm text-gray-500">Effective Date: [22/03/2025]</p>
      </header>

      <section className="mb-6">
        <p>
          MG Currency Converter Pro (“the App”) is a Shopify theme extension designed to enhance your store’s user experience by allowing you to set a unique key and enable customers to select their preferred country for currency display. This Privacy Policy explains the data practices of the App.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Collection & Use</h2>
        <p>
          The App does not collect, store, or transmit any personal information. It operates solely by using the user-provided key and the customer-selected country to determine the appropriate currency conversion settings. No sensitive or personally identifiable data is processed or stored.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Data Storage & Security</h2>
        <p>
          All configuration settings—including your unique key and the selected country for currency conversion—are stored locally within your Shopify theme extension environment. While we take reasonable precautions to secure this data, please note that no method of data storage or transmission is completely secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
        <p>
          MG Currency Converter Pro does not integrate with or transmit data to any third-party services that collect personal data. All functionality is self-contained within your Shopify store.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page along with an updated effective date. Please review this policy periodically for any updates.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@yourdomain.com" className="text-blue-600 hover:underline">support@yourdomain.com</a>.
        </p>
      </section>

      <footer className="mt-8">
        <p>
          By using MG Currency Converter Pro, you agree to the collection and use of information in accordance with this Privacy Policy.
        </p>
      </footer>
    </div>
  );
};

export default CurrencyPrivacyPolicy;
