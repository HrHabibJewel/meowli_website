import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface BouncingHeartProps {
  className?: string;
  delay?: number;
  size?: "sm" | "md" | "lg";
  color?: "coral" | "teal" | "golden";
}

const BouncingHeart = ({ className, delay = 0, size = "md", color = "coral" }: BouncingHeartProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const colorClasses = {
    coral: "text-coral fill-coral/30",
    teal: "text-teal fill-teal/30",
    golden: "text-golden fill-golden/30",
  };

  return (
    <div
      className={cn(
        "absolute pointer-events-none animate-bounce-heart",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <Heart className={cn(sizeClasses[size], colorClasses[color], "drop-shadow-sm")} />
    </div>
  );
};

export default BouncingHeart;
