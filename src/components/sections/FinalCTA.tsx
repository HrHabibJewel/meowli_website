import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Apple, PlayCircle } from 'lucide-react';
import { FloatingPaws, PawPrint } from '@/components/PetIcons';
import ctaKitten from '@/assets/cta-kitten.jpg';

export const FinalCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-hero opacity-60" />
      <FloatingPaws />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card rounded-[2.5rem] shadow-medium overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <img
                src={ctaKitten}
                alt="Adorable sleeping kitten"
                className="w-full h-80 md:h-full object-cover object-bottom"
              />
            </motion.div>
            
            {/* Content side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                 <span className="gap-2 mb-4 items-center justify-center px-4 py-2 rounded-full bg-coral/10 text-coral text-sm font-semibold border border-coral/20">
              Coming Soon!
            </span>
              </div>
             
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <PawPrint size={20} className="text-primary" />
                <span className="text-sm font-medium text-primary">Join 50,000+ pet lovers</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Ready to join the cutest pet community?
              </h2>
              <p className="text-muted-foreground mb-8">
                Download Meowli today and give your pet the social life they deserve! 🐾
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="hero" size="lg" className="gap-3">
                  <Apple className="w-5 h-5" />
                  App Store
                </Button>
                <Button variant="soft" size="lg" className="gap-3">
                  <PlayCircle className="w-5 h-5" />
                  Play Store
                </Button>
              </div>
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
