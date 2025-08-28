"use client";

import { Footer } from "@/components/sections";

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-24 md:pt-28 lg:pt-32 pb-20">
        <header className="text-center mb-24 lg:mb-32">
          <h1 className="font-inter text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F9FA] leading-[1.1] tracking-tight">
            Privacy
            <span className="block font-lora font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#5D9CEC] to-[#FBC02D] mt-3">
              Policy
            </span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-[#F8F9FA]/70 max-w-2xl mx-auto font-inter leading-relaxed">
            Your privacy is important to us. This policy explains how GhostSync collects, uses, and protects your information.
          </p>
        </header>
        <section className="w-full max-w-4xl space-y-8 text-left">
          <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#2A2A2A]">
            <div className="text-center mb-8">
              <h2 className="font-inter text-2xl text-[#F8F9FA] mb-2">Privacy Policy for GhostSync</h2>
              <p className="text-[#F8F9FA]/70 font-inter text-sm">Effective Date: August 16, 2025</p>
            </div>
            
            <div className="text-[#F8F9FA]/80 font-inter text-sm leading-relaxed space-y-6">
              <p>
                GhostSync ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website, software, and services (collectively, the "Services").
              </p>
              <p>
                By using our Services, you agree to the terms of this Privacy Policy.
              </p>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">1. Information We Collect</h3>
                <p className="mb-3">We may collect the following types of information:</p>
                <div className="ml-4 space-y-3">
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.1 Information You Provide Directly</h4>
                    <ul className="ml-6 space-y-1">
                      <li>• Account details (name, email address, billing information).</li>
                      <li>• Profile information (such as company name, role, or preferences).</li>
                      <li>• Content you upload, input, or transmit through the Services.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.2 Information Collected Automatically</h4>
                    <ul className="ml-6 space-y-1">
                      <li>• Log data (IP address, browser type, operating system, date/time of access).</li>
                      <li>• Usage data (features accessed, time spent, interactions with the Software).</li>
                      <li>• Cookies, tracking pixels, and similar technologies to improve functionality.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-inter text-base text-[#F8F9FA] mb-2">1.3 Information from Third Parties</h4>
                    <ul className="ml-6 space-y-1">
                      <li>• If you integrate third-party apps, we may receive limited information as authorized by you.</li>
                      <li>• Payment processors may share payment confirmation data (but we do not store full payment card numbers).</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">2. How We Use Information</h3>
                <p className="mb-3">We use information for the following purposes to:</p>
                <ul className="ml-6 space-y-1">
                  <li>• Provide, operate, and improve our Services.</li>
                  <li>• Process payments and manage billing.</li>
                  <li>• Personalize user experience and recommend features.</li>
                  <li>• Send important updates, security alerts, or support messages.</li>
                  <li>• Comply with legal obligations.</li>
                </ul>
                <p className="mt-3">And</p>
                <ul className="ml-6 space-y-1">
                  <li>• For research, analytics, and product improvement (in anonymized and aggregated form).</li>
                </ul>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">3. Sharing of Information</h3>
                <p className="mb-3">We do not sell your personal data. We may share information in the following limited circumstances:</p>
                <ul className="ml-6 space-y-1">
                  <li>• <strong>With service providers:</strong> Trusted vendors who help us operate (hosting, payment processing, analytics).</li>
                  <li>• <strong>With contractors or affiliates:</strong> To assist in providing the Services, subject to confidentiality.</li>
                  <li>• <strong>For legal compliance:</strong> If required by law, subpoena, or government request.</li>
                  <li>• <strong>Business transfers:</strong> In case of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">4. Data Retention</h3>
                <p>
                  We retain Customer Data for as long as your account is active or as needed to provide the Services. If you close your account, we will delete or anonymize your personal information within a reasonable period, except where required by law.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">5. Data Security</h3>
                <p>
                  We implement reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the Internet or storage system is completely secure.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">6. International Data Transfers</h3>
                <p>
                  If you access the Services from outside the United States, please note that your information may be transferred and stored in the U.S. We will ensure appropriate safeguards are in place for such transfers in compliance with applicable laws.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">7. Your Rights</h3>
                <p className="mb-3">Depending on your jurisdiction, you may have the following rights:</p>
                <ul className="ml-6 space-y-1">
                  <li>• <strong>Access</strong> – Request a copy of the information we hold about you.</li>
                  <li>• <strong>Correction</strong> – Request correction of inaccurate or incomplete information.</li>
                  <li>• <strong>Deletion</strong> – Request deletion of your information ("right to be forgotten").</li>
                  <li>• <strong>Restriction</strong> – Request limitation of processing in certain cases.</li>
                  <li>• <strong>Portability</strong> – Request your information in a structured, machine-readable format.</li>
                  <li>• <strong>Opt-out</strong> – Object to certain uses (such as marketing emails).</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at <a href="mailto:privacy@ghostsync.ai" className="text-[#5D9CEC] underline hover:text-[#4A8BD8]">privacy@ghostsync.ai</a>.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">8. Cookies and Tracking</h3>
                <p className="mb-3">We use cookies and similar technologies to:</p>
                <ul className="ml-6 space-y-1">
                  <li>• Keep you logged in,</li>
                  <li>• Understand usage trends,</li>
                  <li>• Improve our Services,</li>
                  <li>• Provide targeted marketing (where legally permitted).</li>
                </ul>
                <p className="mt-3">
                  You may disable cookies in your browser, but this may affect Service functionality.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">9. Children's Privacy</h3>
                <p>
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">10. Changes to this Policy</h3>
                <p>
                  We may update this Privacy Policy from time to time. The "Effective Date" at the top indicates the latest revision. Significant changes will be communicated via email or through the Services.
                </p>
              </div>

              <div>
                <h3 className="font-inter text-lg text-[#F8F9FA] mb-3">11. Contact Information</h3>
                <p className="mb-3">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="ml-6 space-y-2">
                  <p><strong>GhostSync</strong></p>
                  <p>Attn: Privacy Officer</p>
                  <p>Email: <a href="mailto:privacy@ghostsync.ai" className="text-[#5D9CEC] underline hover:text-[#4A8BD8]">privacy@ghostsync.ai</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 