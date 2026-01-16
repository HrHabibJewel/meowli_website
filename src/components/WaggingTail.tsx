import { cn } from "@/lib/utils";

interface WaggingTailProps {
  className?: string;
  delay?: number;
  variant?: "dog" | "cat";
}

const WaggingTail = ({ className, delay = 0, variant = "dog" }: WaggingTailProps) => {
  return (
    <div
      className={cn("absolute pointer-events-none", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {variant === "dog" ? (
        <svg
          viewBox="0 0 40 60"
          className="w-8 h-12 text-coral animate-wag-fast origin-bottom"
          style={{ animationDelay: `${delay}s` }}
        >
          <path
            d="M20 60 Q25 40 20 20 Q15 10 20 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg
          viewBox="0 0 40 80"
          className="w-6 h-16 text-teal animate-wag origin-bottom"
          style={{ animationDelay: `${delay}s` }}
        >
          <path
            d="M20 80 Q30 60 20 40 Q10 20 25 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
};

export default WaggingTail;
