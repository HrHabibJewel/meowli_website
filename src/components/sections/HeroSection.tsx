import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FloatingPaws } from '@/components/PetIcons';
import heroPets from '@/assets/hero-pets.png';
import meowliLogo from '@/assets/meowli-logo.png';
import { Apple, PlayCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <FloatingPaws />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-blush/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-peach-light/50 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 pt-20 pb-12 md:pt-32 md:pb-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="relative">
            <img src={meowliLogo} alt="Meowli Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-sky rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient bg-gradient-to-r from-primary via-coral to-primary">Meowli</span>
          </h1>
        </motion.div>
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-center text-warm-brown font-medium mb-8 max-w-md mx-auto"
        >
          The app for pets and their humans 🐾
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button variant="hero" size="lg" className="w-full sm:w-auto gap-3">
            <Apple className="w-5 h-5" />
            Download for iOS
          </Button>
          <Button variant="soft" size="lg" className="w-full sm:w-auto gap-3">
            <PlayCircle className="w-5 h-5" />
            Get on Android
          </Button>
        </motion.div>
        
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Decorative hearts */}
          <motion.div
            className="absolute -top-4 -left-4 md:-top-8 md:-left-8"
            animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 bg-blush rounded-full flex items-center justify-center">
              <span className="text-lg md:text-2xl">💕</span>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8"
            animate={{ y: [0, 10, 0], rotate: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 bg-sky rounded-full flex items-center justify-center">
              <span className="text-xl md:text-3xl">🐾</span>
            </div>
          </motion.div>
          
          <img
            src={heroPets}
            alt="Happy dog and cat mascots of Meowli app"
            className="w-full rounded-3xl shadow-medium"
          />
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
