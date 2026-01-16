import { motion } from 'framer-motion';
import { Heart, MapPin, Camera, Store } from 'lucide-react';
import { PawPrint } from '@/components/PetIcons';

const features = [
  {
    icon: Heart,
    title: 'Pet Matchmaking',
    description: 'Find the perfect playdate for your furry friend with smart compatibility matching.',
    color: 'bg-coral/20 text-coral',
    bg: 'bg-coral/10'
  },
  {
    icon: MapPin,
    title: 'Nearby Vet Finder',
    description: 'Discover top-rated veterinarians and pet services in your area.',
    color: 'bg-sky text-accent-foreground',
    bg: 'bg-coral/20'
  },
  {
    icon: Camera,
    title: 'Social Feed',
    description: 'Share adorable moments and connect with a community of pet lovers.',
    color: 'bg-peach-light/20 text-primary',
    bg: 'bg-coral/30'
  },
  {
    icon: Store,
    title: 'Pet Store',
    description: 'Premium food, toys, and accessories delivered to your door. Curated products for every type of pet.',
    color: 'bg-peach-light text-primary',
    bg: 'bg-peach-light'
  },
];

export const FeatureHighlights = () => {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-peach-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-sky/20 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Packed with <span className="text-gradient">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Everything you need to give your pet the best life
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={`${feature.bg} rounded-3xl border-2 p-6 shadow-card backdrop-blur-sm hover:shadow-medium transition-all duration-300 h-full group-hover:-translate-y-1`}>
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {feature.title}
                  <PawPrint size={14} className="text-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
