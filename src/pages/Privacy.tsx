import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import meowliLogo from "@/assets/meowli-logo.png";
import meowliFullLogo from "@/assets/logo_fullname_without_bg.png";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Learn how Meowli protects your privacy and handles your personal data. Our commitment to keeping you and your pet's information safe under Bangladesh data protection laws."
        keywords="meowli privacy policy, pet app privacy, data protection, personal information, Bangladesh privacy, pet data security"
        canonicalUrl="https://meowli.app/privacy"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2" aria-label="Meowli Home">
            {/* <img src={meowliLogo} alt="Meowli Logo" className="w-8 h-8" /> */}
            <img src={meowliFullLogo} alt="Meowli Logo" className="w-38 h-8" />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-card rounded-3xl p-8 md:p-12 shadow-soft">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 24, 2024</p>

          <div className="prose prose-warm max-w-none space-y-6 text-foreground/90">
            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p>
                Meowli ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website, in compliance with the <strong>Digital Security Act, 2018</strong> and <strong>Information and Communication Technology Act, 2006</strong> of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="font-semibold text-foreground mt-6 mb-3">2.1 Personal Information</h3>
              <p>We may collect the following personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Full name and contact details (email, phone number)</li>
                <li>Physical address and location data</li>
                <li>National ID (NID) number for verification purposes (optional)</li>
                <li>Date of birth</li>
                <li>Profile photographs</li>
                <li>Payment information for premium services</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6 mb-3">2.2 Pet Information</h3>
              <p>We collect information about your pets including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Pet name, species, breed, and age</li>
                <li>Health records and vaccination history</li>
                <li>Pet photographs and videos</li>
                <li>Behavioral preferences and characteristics</li>
                <li>Microchip or registration numbers</li>
              </ul>

              <h3 className="font-semibold text-foreground mt-6 mb-3">2.3 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Device information (model, operating system, unique identifiers)</li>
                <li>IP address and approximate location</li>
                <li>App usage data and interaction patterns</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Facilitate pet matchmaking and social connections</li>
                <li>Send health reminders and vaccination notifications</li>
                <li>Connect you with nearby veterinary services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to customer service requests</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Detect and prevent fraudulent activities</li>
                <li>Comply with legal obligations under Bangladeshi law</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">4. Data Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              
              <h3 className="font-semibold text-foreground mt-6 mb-3">4.1 Other Users</h3>
              <p>
                When you use matchmaking features, your pet profile and limited personal information may be visible to other users as per your privacy settings.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">4.2 Service Providers</h3>
              <p>
                Third-party vendors who assist with payment processing, data analytics, and customer support, bound by confidentiality agreements.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">4.3 Veterinary Partners</h3>
              <p>
                With your explicit consent, we may share pet health records with veterinary clinics you choose to connect with.
              </p>

              <h3 className="font-semibold text-foreground mt-6 mb-3">4.4 Legal Requirements</h3>
              <p>
                We may disclose information when required by law, court order, or government authorities in Bangladesh, including compliance with the Digital Security Act, 2018.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure servers located in compliance with data localization requirements</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and employee training</li>
                <li>Incident response procedures</li>
              </ul>
              <p className="mt-4">
                While we strive to protect your information, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as needed to provide services. Upon account deletion, we will delete or anonymize your data within 90 days, except where retention is required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">7. Your Rights</h2>
              <p>Under applicable Bangladeshi law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at privacy@meowli.com.bd
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">8. Children's Privacy</h2>
              <p>
                Meowli is not intended for children under 13 years of age. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">9. Cookies and Tracking</h2>
              <p>
                We use cookies and similar technologies to enhance your experience. You can control cookie preferences through your browser settings. Essential cookies required for service functionality cannot be disabled.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries outside Bangladesh. We ensure appropriate safeguards are in place for such transfers in compliance with applicable laws.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">11. Animal Data Protection</h2>
              <p>
                In alignment with Bangladesh animal welfare policies, we take special care to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Protect pet identification and health records</li>
                <li>Prevent misuse of pet information for illegal activities</li>
                <li>Not share pet location data without owner consent</li>
                <li>Report suspected animal abuse to relevant authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify you of significant changes through the app or email. Your continued use after changes indicates acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">13. Contact Us</h2>
              <p>
                For privacy-related inquiries or to exercise your rights:
              </p>
              <p className="mt-4">
                <strong>Data Protection Officer</strong><br />
                Meowli Bangladesh<br />
                Email: privacy@meowli.com.bd<br />
                Address: Dhaka, Bangladesh<br />
                Phone: +880-XXX-XXXXXXX
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">14. Regulatory Authority</h2>
              <p>
                If you are not satisfied with our response to your privacy concerns, you may contact the <strong>Bangladesh Telecommunication Regulatory Commission (BTRC)</strong> or relevant government authorities.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p className="text-sm">© 2026 Meowli. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Privacy;
