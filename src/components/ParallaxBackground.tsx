import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const ParallaxBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Main background layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1613974089244-916ec6dda17c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cCUyMG5lb24lMjBsaWdodHN8ZW58MXx8fHwxNzU5NjU4MzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Gaming Background"
          className="w-full h-full object-cover opacity-15"
        />
      </motion.div>
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/85 to-green-900/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};