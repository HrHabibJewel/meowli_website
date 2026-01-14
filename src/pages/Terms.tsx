import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import meowliLogo from "@/assets/meowli-logo.png";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        description="Read Meowli's Terms of Service. Understand your rights and responsibilities when using our pet social network and health tracking app in Bangladesh."
        keywords="meowli terms of service, pet app terms, user agreement, terms and conditions, Bangladesh pet app"
        canonicalUrl="https://meowli.app/terms"
      />
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2" aria-label="Meowli Home">
            <img src={meowliLogo} alt="Meowli Logo" className="w-8 h-8" />
            <span className="font-display text-2xl font-bold text-primary">Meowli</span>
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
            Terms and Conditions
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: December 24, 2024</p>

          <div className="prose prose-warm max-w-none space-y-6 text-foreground/90">
            <section aria-labelledby="section-intro">
              <h2 id="section-intro" className="font-display text-xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to Meowli ("we," "our," or "us"). These Terms and Conditions govern your use of the Meowli mobile application and website (collectively, the "Service"). By accessing or using our Service, you agree to be bound by these Terms in accordance with the laws of the People's Republic of Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">2. Eligibility</h2>
              <p>
                You must be at least 18 years of age or have parental/guardian consent to use this Service. By using Meowli, you represent that you have the legal capacity to enter into a binding agreement under Bangladeshi law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">3. Animal Welfare Compliance</h2>
              <p>
                Meowli operates in full compliance with the <strong>Bangladesh Animal Welfare Act, 2019</strong> and the <strong>Cruelty to Animals Act, 1920</strong>. Users must:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Treat all animals with kindness and ensure their welfare</li>
                <li>Not use the platform for any activities that constitute animal cruelty or abuse</li>
                <li>Ensure pets listed on the platform are properly cared for, fed, and housed</li>
                <li>Not engage in illegal wildlife trade or trafficking of protected species under the <strong>Wildlife (Conservation and Security) Act, 2012</strong></li>
                <li>Comply with local municipal regulations regarding pet ownership and registration</li>
                <li>Report any suspected animal abuse or illegal activities to appropriate authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">4. Pet Matchmaking Services</h2>
              <p>
                Our matchmaking features are designed to connect pet owners for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Pet socialization and playdates</li>
                <li>Responsible breeding with proper documentation</li>
                <li>Pet adoption from verified shelters and rescues</li>
              </ul>
              <p className="mt-4">
                Users engaging in pet breeding must comply with ethical breeding practices and ensure all animals receive proper veterinary care. Commercial breeding operations must hold valid licenses as required by local authorities.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">5. User Responsibilities</h2>
              <p>As a Meowli user, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide accurate information about yourself and your pets</li>
                <li>Keep your account credentials secure</li>
                <li>Not misrepresent pet health, breed, or background</li>
                <li>Ensure all vaccinations and health records are up to date</li>
                <li>Not use the platform for commercial purposes without authorization</li>
                <li>Respect other users and maintain community guidelines</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">6. Prohibited Activities</h2>
              <p>The following activities are strictly prohibited:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Selling, trading, or promoting illegal wildlife or endangered species</li>
                <li>Organizing or promoting animal fighting or cruelty</li>
                <li>Posting content depicting animal abuse or neglect</li>
                <li>Fraudulent listings or scams related to pet sales</li>
                <li>Harassment of other users</li>
                <li>Violating any applicable laws of Bangladesh</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">7. Veterinary Services</h2>
              <p>
                Meowli provides information about veterinary services and health tracking features. This information is for reference only and does not constitute professional veterinary advice. Always consult a licensed veterinarian registered with the <strong>Bangladesh Veterinary Council</strong> for medical concerns.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">8. Intellectual Property</h2>
              <p>
                All content, trademarks, and intellectual property on Meowli are owned by us or our licensors. Users retain ownership of content they upload but grant us a license to use such content for service operations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                Meowli is not liable for any disputes between users, pet transactions, or outcomes of matchmaking. We provide the platform "as is" and make no warranties regarding the accuracy of user-provided information.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the People's Republic of Bangladesh. Any disputes shall be subject to the exclusive jurisdiction of the courts in Dhaka, Bangladesh.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Users will be notified of significant changes through the app or email. Continued use of the Service after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-foreground mt-8 mb-4">12. Contact Us</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Meowli Bangladesh</strong><br />
                Email: legal@meowli.com.bd<br />
                Address: Dhaka, Bangladesh<br />
                Phone: +880-XXX-XXXXXXX
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <p className="text-sm">© 2024 Meowli. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Terms;
