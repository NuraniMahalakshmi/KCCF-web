import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy & Cookie Policy | Koenig Childhood Cancer Foundation',
  description: 'Learn about how we collect, use, and protect your information, and our use of cookies and third-party services.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Privacy & Cookie Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Koenig Childhood Cancer Foundation (&quot;KCCF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. 
                This Privacy & Cookie Policy explains how we collect, use, and safeguard your information when you visit our website.
              </p>
            </div>

            {/* Cookies Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Cookie Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use cookies and similar technologies to provide essential functionality and improve your experience on our website.
              </p>

              {/* Strictly Necessary */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Strictly Necessary Services (Always Active)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These services are essential for the website to function properly and cannot be disabled. They include:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Google Tag Manager (GTM)</strong> - Manages the loading of other scripts and services on our website. 
                    GTM itself does not collect personal data but enables other services to function.
                  </li>
                  <li>
                    <strong>Zeffy</strong> - Powers our donation forms and payment processing. Required for accepting donations.
                  </li>
                  <li>
                    <strong>Monday.com Forms</strong> - Enables our contact, volunteer, and application forms. Required for form submissions.
                  </li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Analytics Services (Require Consent)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These services help us understand how visitors use our website so we can improve it. They are only activated with your consent:
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <strong>Google Analytics</strong> - Collects anonymous statistics about website usage, such as pages visited and time spent on site.
                  </li>
                  <li>
                    <strong>Microsoft Clarity</strong> - Provides heatmaps and session recordings to help us understand user behavior and improve usability.
                  </li>
                </ul>
              </div>

              {/* How to Manage */}
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Managing Your Cookie Preferences
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  You can manage your cookie preferences at any time by clicking the &quot;Cookie settings&quot; button in the footer of our website. 
                  Note that strictly necessary services cannot be disabled as they are required for the website to function.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Contact Information</strong> - Name, email address, phone number when you submit forms</li>
                <li><strong>Donation Information</strong> - Payment details processed securely through Zeffy</li>
                <li><strong>Usage Data</strong> - Anonymous information about how you use our website (with consent)</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Process donations and provide tax receipts</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send newsletters (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Data Protection</h2>
              <p className="text-gray-700 dark:text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information. 
                All payment processing is handled securely by our payment provider, Zeffy, and we never store your payment card details on our servers.
              </p>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our website uses the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li><strong>Zeffy</strong> - Donation processing (zeffy.com)</li>
                <li><strong>Monday.com</strong> - Form submissions (monday.com)</li>
                <li><strong>Google Tag Manager</strong> - Script management (google.com)</li>
                <li><strong>Google Analytics</strong> - Website analytics (google.com) - requires consent</li>
                <li><strong>Microsoft Clarity</strong> - User behavior analytics (clarity.microsoft.com) - requires consent</li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (where applicable)</li>
                <li>Withdraw consent for analytics cookies at any time</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-700 dark:text-violet-400 mb-4">Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                If you have any questions about this Privacy & Cookie Policy, please contact us:
              </p>
              <div className="text-gray-700 dark:text-gray-300">
                <p>Koenig Childhood Cancer Foundation</p>
                <p>1175 York Ave., Suite 15E</p>
                <p>New York, NY 10065</p>
                <p>Email: <a href="mailto:join@thekccf.org" className="text-violet-600 dark:text-violet-400 hover:underline">join@thekccf.org</a></p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-6">
              <p>Last updated: November 2025</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
