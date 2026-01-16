import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carouselShare from '@/assets/carousel-share.png';
import carouselMatch from '@/assets/match.png';
import carouselHealth from '@/assets/vets.png';

const slides = [
  {
    id: 1,
    title: 'Share your pet\'s moments',
    description: 'Capture and share the cutest photos and videos with a community that truly gets it.',
    image: carouselShare,
    bgClass: 'bg-peach-light',
  },
  {
    id: 2,
    title: 'Find perfect matches',
    description: 'Connect your furry friends with compatible playmates nearby.',
    image: carouselMatch,
    bgClass: 'bg-blush',
  },
  {
    id: 3,
    title: 'Find nearby vets',
    description: 'Discover trusted veterinarians near you and request appointments with ease.',
    image: carouselHealth,
    bgClass: 'bg-peach-light',
  },
];

export const WhyMeowliCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Set up the select callback
  if (emblaApi) {
    emblaApi.on('select', onSelect);
  }

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
            Why <span className="text-gradient">Meowli</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Discover what makes us the #1 choice for pet lovers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows - Desktop */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-soft items-center justify-center text-foreground hover:bg-secondary transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide) => (
                <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                  <div className={`${slide.bgClass} rounded-3xl p-6 md:p-12 mx-2`}>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-1 text-center md:text-left order-2 md:order-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          {slide.description}
                        </p>
                      </div>
                      <div className="flex-1 order-1 md:order-2">
                        <motion.img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full max-w-xs mx-auto rounded-2xl shadow-soft"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? 'bg-primary w-8'
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile swipe hint */}
          <p className="text-center text-sm text-muted-foreground mt-4 md:hidden">
            ← Swipe to explore →
          </p>
        </div>
      </div>
    </section>
  );
};
