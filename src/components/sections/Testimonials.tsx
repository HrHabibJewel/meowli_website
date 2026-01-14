import { motion } from 'framer-motion';
import { PawPrint } from '@/components/PetIcons';

const testimonials = [
  {
    id: 1,
    quote: "Meowli helped us find the perfect playmate for Max! Now they're inseparable.",
    author: 'Sarah & Max',
    pet: '🐕',
    avatar: 'M',
    bgClass: 'bg-peach-light',
  },
  {
    id: 2,
    quote: "The health tracking feature is a lifesaver. I never miss Luna's appointments anymore!",
    author: 'James & Luna',
    pet: '🐱',
    avatar: 'L',
    bgClass: 'bg-sky',
  },
  {
    id: 3,
    quote: "Best pet app ever! The community is so supportive and the UI is adorable.",
    author: 'Emily & Buddy',
    pet: '🐕',
    avatar: 'B',
    bgClass: 'bg-blush',
  },
  {
    id: 4,
    quote: "Finally an app that understands what pet parents need. Whiskers approved! 😺",
    author: 'Mike & Whiskers',
    pet: '🐱',
    avatar: 'W',
    bgClass: 'bg-mint',
  },
];

export const Testimonials = () => {
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
            Loved by <span className="text-gradient">Pet Parents</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            See what our furry friends and their humans are saying
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Chat bubble style */}
              <div className="bg-card rounded-3xl p-6 shadow-soft relative">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-3 left-8 w-6 h-6 bg-card rotate-45 shadow-soft" />
                
                <p className="text-foreground mb-4 relative z-10">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center gap-3 relative z-10">
                  <div className={`w-10 h-10 rounded-full ${testimonial.bgClass} flex items-center justify-center font-bold text-foreground`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm flex items-center gap-1">
                      {testimonial.author}
                      <span>{testimonial.pet}</span>
                    </p>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <PawPrint key={i} size={12} className="text-primary" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
