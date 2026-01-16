import { cn } from "@/lib/utils";

interface FloatingPawProps {
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
}

const FloatingPaw = ({ className, delay = 0, size = "md" }: FloatingPawProps) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div
      className={cn(
        "absolute opacity-20 pointer-events-none",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg
        viewBox="0 0 60 60"
        fill="currentColor"
        className="w-full h-full text-coral animate-float"
        style={{ animationDelay: `${delay}s` }}
      >
        <path d="M30 35c-4 0-7 3-7 7s3 7 7 7 7-3 7-7-3-7-7-7zm-12-8c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm24 0c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm-18-8c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4zm12 0c-2.5 0-4 2-4 4s1.5 4 4 4 4-2 4-4-1.5-4-4-4z" />
      </svg>
    </div>
  );
};

export default FloatingPaw;
