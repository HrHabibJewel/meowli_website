import { motion } from 'framer-motion';

interface PawPrintProps {
  className?: string;
  size?: number;
}

export const PawPrint = ({ className = '', size = 24 }: PawPrintProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <ellipse cx="12" cy="17" rx="4" ry="3.5" />
    <circle cx="7" cy="12" r="2" />
    <circle cx="17" cy="12" r="2" />
    <circle cx="9" cy="8" r="1.5" />
    <circle cx="15" cy="8" r="1.5" />
  </svg>
);

export const FloatingPaws = () => {
  const pawPositions = [
    { left: '10%', top: '20%', delay: 0, rotate: -15 },
    { left: '80%', top: '15%', delay: 1, rotate: 20 },
    { left: '25%', top: '70%', delay: 2, rotate: -10 },
    { left: '70%', top: '60%', delay: 0.5, rotate: 15 },
    { left: '5%', top: '45%', delay: 1.5, rotate: -20 },
    { left: '90%', top: '40%', delay: 2.5, rotate: 10 },
    { left: '50%', top: '10%', delay: 0.8, rotate: 5 },
    { left: '40%', top: '80%', delay: 1.8, rotate: -5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pawPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          style={{ left: pos.left, top: pos.top }}
          initial={{ opacity: 0, scale: 0.5, rotate: pos.rotate }}
          animate={{
            opacity: [0.05, 0.15, 0.05],
            scale: [0.8, 1.1, 0.8],
            y: [0, -30, 0],
            rotate: [pos.rotate - 5, pos.rotate + 5, pos.rotate - 5],
          }}
          transition={{
            duration: 6,
            delay: pos.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <PawPrint size={40 + Math.random() * 30} />
        </motion.div>
      ))}
    </div>
  );
};

export const BoneIcon = ({ className = '', size = 24 }: PawPrintProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M4.5 7.5a2.5 2.5 0 0 1 4.9-.7 2.5 2.5 0 0 1 .7 4.9l-4.2 4.2a2.5 2.5 0 0 1-4.9.7 2.5 2.5 0 0 1-.7-4.9l4.2-4.2zm15 9a2.5 2.5 0 0 1-4.9.7 2.5 2.5 0 0 1-.7-4.9l4.2-4.2a2.5 2.5 0 0 1 4.9-.7 2.5 2.5 0 0 1 .7 4.9l-4.2 4.2z" />
  </svg>
);

export const HeartBubble = ({ className = '' }: { className?: string }) => (
  <motion.div
    className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-blush ${className}`}
    animate={{ scale: [1, 1.1, 1] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="hsl(var(--coral))" className="drop-shadow-sm">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </motion.div>
);
