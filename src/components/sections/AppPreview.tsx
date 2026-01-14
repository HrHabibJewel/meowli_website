import { motion } from 'framer-motion';
import appScreen1 from '@/assets/app-screen-1.png';
import appScreen2 from '@/assets/app-screen-2.png';
import appScreen3 from '@/assets/app-screen-3.png';
import { HeartBubble } from '@/components/PetIcons';

export const AppPreview = () => {
  return (
    <section className="py-16 md:py-24 gradient-warm overflow-hidden">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See <span className="text-gradient">Meowli</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            A peek inside the cutest pet app ever made
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Floating decorations */}
          <motion.div
            className="absolute -top-8 left-1/4 z-20"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <HeartBubble />
          </motion.div>
          <motion.div
            className="absolute top-1/3 -right-4 z-20"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-sky flex items-center justify-center text-lg">
              🐾
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-1/4 -left-4 z-20"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center text-xl">
              ❤️
            </div>
          </motion.div>

          {/* Phone mockups */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Left phone */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 rounded-[2.5rem] blur-xl" />
                <img
                  src={appScreen1}
                  alt="Meowli Home Feed"
                  className="relative w-48 md:w-56 rounded-[2rem] shadow-medium -rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Center phone - Main */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-coral/30 rounded-[3rem] blur-2xl scale-110" />
                <motion.img
                  src={appScreen2}
                  alt="Meowli Pet Profile"
                  className="relative w-56 md:w-72 rounded-[2.5rem] shadow-glow"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Right phone */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden sm:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-coral/20 rounded-[2.5rem] blur-xl" />
                <img
                  src={appScreen3}
                  alt="Meowli Matchmaking"
                  className="relative w-48 md:w-56 rounded-[2rem] shadow-medium rotate-6 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
