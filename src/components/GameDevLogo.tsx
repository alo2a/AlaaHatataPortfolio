import { motion } from 'motion/react';
import { Code, Gamepad2, Zap } from 'lucide-react';

export const GameDevLogo = ({ size = 'large' }: { size?: 'small' | 'medium' | 'large' }) => {
  const sizeClasses = {
    small: 'text-2xl',
    medium: 'text-3xl', 
    large: 'text-4xl md:text-5xl'
  };

  const iconSize = {
    small: 'w-6 h-6',
    medium: 'w-8 h-8',
    large: 'w-10 h-10 md:w-12 md:h-12'
  };

  return (
    <motion.div 
      className="flex items-center justify-center gap-3"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      {/* Logo Icon Container */}
      <div className="relative">
        {/* Main Logo Circle */}
        <motion.div 
          className="relative bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full p-3 shadow-2xl"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          {/* Inner gradient overlay */}
          <div className="absolute inset-1 bg-gradient-to-br from-black/20 to-transparent rounded-full"></div>
          
          {/* Gaming Controller Icon */}
          <motion.div
            animate={{ rotateY: [0, 180, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Gamepad2 className={`${iconSize[size]} text-white relative z-10`} />
          </motion.div>
          
          {/* Floating Code Brackets */}
          <motion.div
            className="absolute -top-2 -right-2 text-yellow-400"
            animate={{ 
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Code className="w-4 h-4" />
          </motion.div>
          
          {/* Lightning Bolt */}
          <motion.div
            className="absolute -bottom-1 -left-2 text-yellow-300"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Zap className="w-3 h-3" />
          </motion.div>
        </motion.div>
        
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.div
          className={`${sizeClasses[size]} leading-tight`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Asheed
          </span>
        </motion.div>
        
        <motion.div
          className={`${size === 'large' ? 'text-lg md:text-xl' : size === 'medium' ? 'text-base' : 'text-sm'} text-gray-300 tracking-wider`}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          GAME DEV
        </motion.div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export const CompactLogo = () => {
  return (
    <motion.div 
      className="flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <div className="bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg p-2">
          <Gamepad2 className="w-6 h-6 text-white" />
        </div>
        <motion.div
          className="absolute -top-1 -right-1 text-yellow-400"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Code className="w-3 h-3" />
        </motion.div>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-sm leading-tight">Asheed</span>
        <span className="text-cyan-400 text-xs tracking-wide">GAME DEV</span>
      </div>
    </motion.div>
  );
};