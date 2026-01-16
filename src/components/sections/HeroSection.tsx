import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FloatingPaws } from '@/components/PetIcons';
import heroPets from '@/assets/hero-pets.png';
import meowliLogo from '@/assets/meowli-logo.png';
import meowliFullLogo from '@/assets/logo_fullname_without_bg.png';
import { Apple, PlayCircle } from 'lucide-react';
import WaggingTail from "@/components/WaggingTail";
import FloatingPaw from "@/components/FloatingPaw";
import BouncingHeart from "@/components/BouncingHeart";
import PawTrail from "@/components/PawTrail";
import { FloatingBone, FloatingFish, Sparkle } from "@/components/FloatingPetElements";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      <FloatingPaws />
      {/* Floating Paws Background */}
      <FloatingPaw className="top-20 left-[10%] animate-float" delay={0} size="lg" />
      <FloatingPaw className="top-40 right-[15%] animate-float-slow" delay={1} size="md" />
      <FloatingPaw className="bottom-40 left-[5%] animate-float-reverse" delay={2} size="sm" />
      <FloatingPaw className="top-60 left-[25%] animate-float" delay={0.5} size="sm" />
      <FloatingPaw className="bottom-60 right-[10%] animate-float-slow" delay={1.5} size="lg" />
      <FloatingPaw className="top-32 right-[30%] animate-float-reverse" delay={2.5} size="md" />

      {/* Bouncing Hearts */}
      <BouncingHeart className="top-24 right-[20%]" delay={0} size="md" color="coral" />
      <BouncingHeart className="top-48 left-[18%]" delay={0.5} size="sm" color="teal" />
      <BouncingHeart className="bottom-52 right-[25%]" delay={1} size="lg" color="coral" />
      <BouncingHeart className="top-72 right-[8%]" delay={1.5} size="sm" color="golden" />
      <BouncingHeart className="bottom-32 left-[12%]" delay={0.3} size="md" color="teal" />

      {/* Floating Bones & Fish */}
      <FloatingBone className="top-36 left-[8%]" delay={0} />
      <FloatingBone className="bottom-48 right-[18%]" delay={2} />
      <FloatingFish className="top-56 right-[5%]" delay={1} />
      <FloatingFish className="bottom-36 left-[22%]" delay={3} />

      {/* Sparkles */}
      <Sparkle className="top-28 left-[35%]" delay={0} />
      <Sparkle className="top-44 right-[35%]" delay={1} />
      <Sparkle className="bottom-44 left-[40%]" delay={2} />
      <Sparkle className="top-80 left-[15%]" delay={0.5} />
      <Sparkle className="bottom-64 right-[12%]" delay={1.5} />
      {/* Paw Pattern Overlay */}
      <div className="absolute inset-0 paw-pattern pointer-events-none" />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-sky/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-blush/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-peach-light/50 rounded-full blur-3xl" />
      
      <div className="container relative z-10 px-4 pt-10 pb-12 md:pt-22 md:pb-24">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 "
        >
                 
                  
                  {/* Hearts near the pets */}
                  <BouncingHeart className="top-4 right-8" size="sm" color="coral" delay={0.3} />
                  <BouncingHeart className="top-8 left-12" size="sm" color="teal" delay={0.8} />
          <img src={meowliFullLogo} alt="Meowli Logo" width={350} />
           
          <div className="relative">
            
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-sky rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-gradient bg-gradient-to-r from-primary via-coral to-primary">Meowli</span>
          </h1> */}
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

          <motion.div
            className="relative"
            animate={{ y: [480, 480, 480], rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            {/* Wagging Tails near the image */}
            <WaggingTail className="-left-6 bottom-20" variant="dog" delay={0.3} />
            <WaggingTail className="-right-5 bottom-16" variant="cat" delay={0.5} />
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
