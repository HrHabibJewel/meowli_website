import { cn } from "@/lib/utils";

interface FloatingElementProps {
  className?: string;
  delay?: number;
}

export const FloatingBone = ({ className, delay = 0 }: FloatingElementProps) => (
  <div
    className={cn("absolute pointer-events-none animate-bone-float opacity-20", className)}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg viewBox="0 0 60 30" className="w-12 h-6 text-coral" fill="currentColor">
      <ellipse cx="8" cy="6" rx="8" ry="6" />
      <ellipse cx="8" cy="24" rx="8" ry="6" />
      <ellipse cx="52" cy="6" rx="8" ry="6" />
      <ellipse cx="52" cy="24" rx="8" ry="6" />
      <rect x="8" y="10" width="44" height="10" rx="3" />
    </svg>
  </div>
);

export const FloatingFish = ({ className, delay = 0 }: FloatingElementProps) => (
  <div
    className={cn("absolute pointer-events-none animate-fish-swim opacity-20", className)}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg viewBox="0 0 50 30" className="w-10 h-6 text-teal" fill="currentColor">
      <ellipse cx="22" cy="15" rx="18" ry="10" />
      <polygon points="40,15 50,5 50,25" />
      <circle cx="12" cy="12" r="2" fill="white" />
    </svg>
  </div>
);

export const Sparkle = ({ className, delay = 0 }: FloatingElementProps) => (
  <div
    className={cn("absolute pointer-events-none animate-sparkle opacity-40", className)}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 text-golden" fill="currentColor">
      <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" />
    </svg>
  </div>
);
