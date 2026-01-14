import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send, Mail, Phone, MapPin } from "lucide-react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import meowliLogo from "@/assets/meowli-logo.png";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent! 🐾",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with the Meowli team. We're here to help with questions about our pet social network, health tracking features, or any support you need in Bangladesh."
        keywords="contact meowli, pet app support, customer service, help, feedback, Bangladesh pet app support"
        canonicalUrl="https://meowli.app/contact"
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-accent/20 to-background">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav aria-label="Main navigation">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            aria-label="Go back to home page"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <img src={meowliLogo} alt="Meowli Logo" className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about Meowli? We'd love to hear from you! Our team is
            here to help pet lovers and their furry friends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <section aria-labelledby="contact-form-heading">
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
              <h2 id="contact-form-heading" className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" aria-hidden="true" />
                Send us a Message
              </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="rounded-xl"
                    />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="rounded-xl"
                    />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="rounded-xl"
                  />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows={5}
                    className="rounded-xl resize-none"
                  />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
              </form>
            </div>
          </section>

          {/* Contact Info */}
          <section aria-labelledby="contact-info-heading" className="space-y-8">
            <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
              <h2 id="contact-info-heading" className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>

              <address className="space-y-6 not-italic">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a href="mailto:support@meowli.app" className="text-muted-foreground hover:text-primary transition-colors block">support@meowli.app</a>
                    <a href="mailto:hello@meowli.app" className="text-muted-foreground hover:text-primary transition-colors block">hello@meowli.app</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <a href="tel:+8801XXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors block">+880 1XXX-XXXXXX</a>
                    <p className="text-sm text-muted-foreground">
                      Sun - Thu, 9am - 6pm (BST)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Meowli Technologies Ltd.
                    </p>
                    <p className="text-muted-foreground">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </address>
            </div>

            {/* FAQ Teaser */}
            <aside className="bg-gradient-to-br from-primary/10 to-secondary/20 rounded-3xl p-8 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-3">
                Frequently Asked Questions
              </h3>
              <p className="text-muted-foreground mb-4">
                Looking for quick answers? Check out our FAQ section for common
                questions about Meowli.
              </p>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">
                  🐾 How do I create a pet profile?
                </p>
                <p className="text-foreground">
                  🐾 Is Meowli available in Bangladesh?
                </p>
                <p className="text-foreground">
                  🐾 How does pet matchmaking work?
                </p>
              </div>
            </aside>
          </section>
        </div>
      </main>
    </div>
    </>
  );
};

export default Contact;
