const BlogifyPrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        <header className="border-b border-gray-200 pb-4">
          <h1 className="text-2xl font-semibold text-gray-900">Privacy Policy</h1>
          <p className="mt-1 text-sm text-gray-600">
            <strong>LM Blogify | Blog to AI Audio</strong> · Last updated: February 2026
          </p>
        </header>

        <p className="mt-6">
          This privacy policy explains how LM Blogify | Blog to AI Audio ("the App") handles data
          when it converts blog posts into audio and embeds a player on blog pages.
        </p>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">1. Who we are</h2>
          <p className="mt-2">
            The App is operated by Lumoonix (or the legal entity that operates the App). For privacy
            and data requests, contact us at <strong>info@lumoonix.com</strong>.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            2. What the App does
          </h2>
          <p className="mt-2">
            LM Blogify turns your blog posts into natural-sounding audio using AI-generated voices
            (male and female) and embeds a sleek audio player directly on blog pages for seamless
            playback. The setup is no-code and takes only minutes.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            3. Data we collect and how we use it
          </h2>

          <h3 className="mt-4 text-base font-semibold text-gray-900">Merchant and shop data</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              We store basic app configuration and settings required to run the App in your store.
            </li>
            <li>
              <strong>Purpose:</strong> To enable audio generation and embed the audio player on
              blog pages.
            </li>
          </ul>

          <h3 className="mt-4 text-base font-semibold text-gray-900">Blog content and audio</h3>
          <ul className="mt-2 list-disc pl-5">
            <li>
              We access blog post content only to generate the audio version of the post.
            </li>
            <li>
              We <strong>do not store</strong> blog content or generated audio on our servers.
            </li>
            <li>
              Generated audio files are saved in the <strong>merchant&apos;s file system</strong>
              (Shopify Files).
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            4. Cookies, local storage, and tracking
          </h2>
          <ul className="mt-2 list-disc pl-5">
            <li>The App does <strong>not</strong> set cookies.</li>
            <li>The App does <strong>not</strong> use localStorage or other tracking mechanisms.</li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">5. Sharing and third parties</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              We do not sell personal information.
            </li>
            <li>
              Data is shared only as needed to operate the App, comply with law, or enforce our
              terms.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">6. Data retention</h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              App configuration data is retained while the App is installed and as required for
              compliance.
            </li>
            <li>
              Blog content and audio are not retained on our servers.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">
            7. Your rights
          </h2>
          <ul className="mt-2 list-disc pl-5">
            <li>
              Merchants may request access, correction, or deletion of data associated with the App.
            </li>
            <li>
              We respond to Shopify compliance webhooks as required.
            </li>
          </ul>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">8. Security</h2>
          <p className="mt-2">
            We use industry-standard measures to protect data and comply with Shopify&apos;s app
            requirements.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">9. Changes to this policy</h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. The "Last updated" date above will
            be revised when changes are made.
          </p>
        </section>

        <section className="mt-7">
          <h2 className="text-lg font-semibold text-gray-900">10. Contact</h2>
          <div className="mt-2 rounded-lg bg-gray-100 p-4">
            <p>For privacy questions or data requests:</p>
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
            LM Blogify | Blog to AI Audio · Privacy Policy ·{" "}
            <a className="text-blue-600 hover:underline" href="https://site.pwamg.shop">
              MG Pro
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default BlogifyPrivacyPolicy;
