import { motion } from 'motion/react';

export const FloatingBird = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute text-2xl"
      animate={{
        x: [0, 100, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      🐦
    </motion.div>
  );
};

export const BouncingPlayer = () => {
  return (
    <motion.div
      className="text-4xl cursor-pointer"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.2,
        rotate: 10,
      }}
    >
      🎮
    </motion.div>
  );
};

export const SwayingTree = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="text-3xl"
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      🌲
    </motion.div>
  );
};

export const FloatingCoin = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute text-xl"
      animate={{
        y: [0, -15, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      🪙
    </motion.div>
  );
};

export const GameController = () => {
  return (
    <motion.div
      className="text-3xl"
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      🎮
    </motion.div>
  );
};

export const PixelHeart = () => {
  return (
    <motion.div
      className="text-red-500"
      animate={{
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ❤️
    </motion.div>
  );
};