import { motion } from 'framer-motion';
import stepProfile from '@/assets/step-profile.png';
import stepSwipe from '@/assets/step-swipe.png';
import stepCare from '@/assets/step-care.png';
import { PawPrint } from '@/components/PetIcons';

const steps = [
  {
    id: 1,
    title: 'Create your pet profile',
    description: 'Add your furry friend with photos, personality traits, and all the cute details.',
    image: stepProfile,
  },
  {
    id: 2,
    title: 'Swipe to find matches',
    description: 'Discover compatible playmates for your pet in your neighborhood.',
    image: stepSwipe,
  },
  {
    id: 3,
    title: 'Find nearby vets',
    description: 'Discover trusted veterinarians and pet care services in your area.',
    image: stepCare,
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-64 h-64 bg-blush/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-sky/30 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Getting started is as easy as 1-2-3
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
              )}
              
              <div className="bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300 group">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-coral flex items-center justify-center text-primary-foreground font-bold text-xl shadow-medium group-hover:scale-110 transition-transform">
                  {step.id}
                </div>
                
                {/* Image */}
                <motion.div
                  className="mb-6 flex justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-48 h-48 object-contain drop-shadow-lg"
                  />
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {step.title}
                  <PawPrint size={16} className="text-primary/50" />
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
