import { cn } from "@/lib/utils";

interface PawTrailProps {
  className?: string;
}

const PawIcon = ({ delay, left, flip }: { delay: number; left: number; flip?: boolean }) => (
  <div
    className="absolute animate-paw-step opacity-0"
    style={{ 
      animationDelay: `${delay}s`,
      left: `${left}%`,
      transform: flip ? "scaleX(-1)" : undefined,
    }}
  >
    <svg
      viewBox="0 0 60 60"
      className="w-8 h-8 text-coral/40"
      fill="currentColor"
    >
      <path d="M30 35c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm-12-8c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm24 0c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm-18-8c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm12 0c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4z" />
    </svg>
  </div>
);

const PawTrail = ({ className }: PawTrailProps) => {
  return (
    <div className={cn("absolute inset-x-0 h-16 pointer-events-none overflow-hidden", className)}>
      <div className="relative w-full h-full">
        <PawIcon delay={0} left={5} />
        <PawIcon delay={0.4} left={15} flip />
        <PawIcon delay={0.8} left={25} />
        <PawIcon delay={1.2} left={35} flip />
        <PawIcon delay={1.6} left={45} />
        <PawIcon delay={2.0} left={55} flip />
        <PawIcon delay={2.4} left={65} />
        <PawIcon delay={2.8} left={75} flip />
        <PawIcon delay={3.2} left={85} />
      </div>
    </div>
  );
};

export default PawTrail;
