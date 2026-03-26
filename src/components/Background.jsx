import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
      
      {/* Floating Hexagon Wireframe */}
      <motion.div
        animate={{ rotate: 360, x: [0, 40, -40, 0], y: [0, -60, 60, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 border-[2px] border-blue-400/30 dark:border-blue-500/20"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />

      {/* Floating Large Triangle Wireframe */}
      <motion.div
        animate={{ rotate: -360, x: [0, -50, 50, 0], y: [0, 80, -80, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 border-[2px] border-indigo-400/20 dark:border-indigo-500/10"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
      />

      {/* Floating Diamond Wireframe */}
      <motion.div
        animate={{ rotate: 360, x: [0, 60, -60, 0], y: [0, 40, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-2/3 w-48 h-48 border-[2px] border-purple-400/30 dark:border-purple-500/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />

      {/* Background Ambient Glow (Keeps the glassmorphism looking good) */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px]"
      />

      {/* Grid Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;