import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { PawPrint } from '@/components/PetIcons';
import meowliLogo from '@/assets/meowli-logo.png';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqCategories = [
  {
    title: 'Getting Started',
    questions: [
      {
        question: 'What is Meowli?',
        answer: 'Meowli is a pet matchmaking and care app that helps you find the perfect playdate companions for your furry friends, discover nearby veterinarians, and connect with a community of pet lovers.',
      },
      {
        question: 'How do I create an account?',
        answer: 'Download the Meowli app from the App Store or Google Play, tap "Sign Up", and follow the simple steps to create your profile. You can sign up using your email or social media accounts.',
      },
      {
        question: 'Is Meowli free to use?',
        answer: 'Yes! Meowli offers a free tier with core features including pet profile creation, basic matchmaking, and access to our community. Premium features are available through optional subscription plans.',
      },
    ],
  },
  {
    title: 'Pet Matchmaking',
    questions: [
      {
        question: 'How does pet matchmaking work?',
        answer: 'Our smart algorithm considers factors like pet species, breed, age, temperament, activity level, and location to suggest compatible playdate partners. Simply swipe right on profiles you like!',
      },
      {
        question: 'Can I match different types of pets?',
        answer: 'Absolutely! While we recommend matches between compatible species, you can customize your preferences. Our app supports dogs, cats, rabbits, birds, and many other pets.',
      },
      {
        question: 'How do I arrange a playdate after matching?',
        answer: 'Once you match with another pet owner, you can chat through our secure messaging system to plan meetups at pet-friendly locations, parks, or arrange home visits.',
      },
    ],
  },
  {
    title: 'Finding Veterinarians',
    questions: [
      {
        question: 'How do I find vets near me?',
        answer: 'Use the "Find Vets" feature in the app to discover trusted veterinarians in your area. You can filter by specialty, ratings, distance, and availability.',
      },
      {
        question: 'Can I book appointments through Meowli?',
        answer: 'Yes! Many veterinary clinics in our network allow direct appointment booking through the app. Simply select your preferred vet, choose a time slot, and confirm your booking.',
      },
      {
        question: 'Are the veterinarians verified?',
        answer: 'All veterinarians listed on Meowli are verified professionals with valid licenses. We also display ratings and reviews from other pet owners to help you make informed decisions.',
      },
    ],
  },
  {
    title: 'Privacy & Safety',
    questions: [
      {
        question: 'Is my personal information safe?',
        answer: 'We take privacy seriously. Your personal data is encrypted and stored securely. We never share your information with third parties without your explicit consent. Read our Privacy Policy for details.',
      },
      {
        question: 'How do you ensure safe meetups?',
        answer: 'We recommend meeting in public pet-friendly spaces for initial playdates. Our app includes safety features like profile verification, user ratings, and the ability to report concerns.',
      },
      {
        question: 'Can I control who sees my profile?',
        answer: 'Yes! You have full control over your privacy settings. You can choose what information to display, set location radius preferences, and block or report users if needed.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <SEO
        title="FAQ | Meowli - Pet Matchmaking & Care"
        description="Find answers to frequently asked questions about Meowli's pet matchmaking, vet finder, and community features."
        keywords="meowli faq, pet matchmaking questions, pet app help, vet finder help"
        canonicalUrl="https://meowli.com/faq"
      />
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary/10 py-6">
          <div className="container px-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <img src={meowliLogo} alt="Meowli Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-primary">Meowli</span>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="container px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <PawPrint className="w-8 h-8 text-primary" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Frequently Asked Questions
              </h1>
            </div>
            
            <p className="text-muted-foreground mb-10">
              Got questions? We have answers! Browse our FAQ or{' '}
              <Link to="/contact" className="text-primary hover:underline">
                contact us
              </Link>{' '}
              if you need more help.
            </p>

            <div className="space-y-8">
              {faqCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <PawPrint className="w-5 h-5 text-primary" />
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-soft">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.title}-${index}`}
                        className="border-b border-border/50 last:border-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-primary/5 rounded-t-2xl">
                          <span className="font-medium text-foreground">
                            {faq.question}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center bg-primary/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our team is here to help you and your furry friends!
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <PawPrint className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-foreground py-8 mt-12">
          <div className="container px-4 text-center">
            <p className="text-primary-foreground/50 text-sm">
              © 2026 Meowli. Made with 💕 for pets and their humans.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FAQ;
