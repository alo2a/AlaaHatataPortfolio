import { motion } from 'motion/react';
import { Code, Gamepad2, Zap, Monitor, Cpu, Trophy } from 'lucide-react';

export const GamerMascot = () => {
  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-72 h-72 border-4 border-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* Floating icons around the ring */}
        <motion.div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-black" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 -right-4 transform -translate-y-1/2"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-black" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="w-8 h-8 bg-red-400 rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-black" />
          </div>
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 -left-4 transform -translate-y-1/2"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        >
          <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
            <Monitor className="w-5 h-5 text-black" />
          </div>
        </motion.div>
      </motion.div>

      {/* Inner pulsing circle */}
      <motion.div
        className="absolute w-56 h-56 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Central gaming mascot */}
      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-gray-800 to-black rounded-2xl border-4 border-cyan-400 shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-1 p-2">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-cyan-400 rounded-sm"
                animate={{ opacity: [0.1, 1, 0.1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main gaming controller icon */}
        <motion.div
          className="relative z-20"
          animate={{ 
            rotateY: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Gamepad2 className="w-16 h-16 text-cyan-400" />
        </motion.div>

        {/* Floating code symbols */}
        <motion.div
          className="absolute top-2 right-2 text-yellow-400"
          animate={{ 
            rotate: [0, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity 
          }}
        >
          <span className="text-xl">{'</>'}</span>
        </motion.div>

        <motion.div
          className="absolute bottom-2 left-2 text-pink-400"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity 
          }}
        >
          <Zap className="w-4 h-4" />
        </motion.div>

        {/* Glowing edges */}
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/50 animate-pulse"></div>
      </div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Gaming UI Elements */}
      <motion.div
        className="absolute -top-8 -right-8 text-4xl"
        animate={{ 
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🎮
      </motion.div>

      <motion.div
        className="absolute -bottom-8 -left-8 text-4xl"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        ⚡
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-12 text-3xl"
        animate={{ 
          x: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        🔥
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -right-12 text-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⭐
      </motion.div>

      {/* Health bar UI element */}
      <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-gray-800 rounded-full border border-cyan-400/50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-cyan-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Level indicator */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 rounded-full border border-purple-400/50">
        <span className="text-white text-sm tracking-wide">LVL 99</span>
      </div>
    </div>
  );
};

export const MiniGamerIcon = () => {
  return (
    <motion.div
      className="relative w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center"
      whileHover={{ scale: 1.1, rotate: 5 }}
      animate={{ 
        boxShadow: [
          "0 0 20px rgba(56, 178, 172, 0.5)",
          "0 0 30px rgba(147, 51, 234, 0.5)",
          "0 0 20px rgba(56, 178, 172, 0.5)"
        ]
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <Gamepad2 className="w-8 h-8 text-white" />
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
};