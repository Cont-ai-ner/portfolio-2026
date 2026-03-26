import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50 dark:bg-[#0a0f1c] transition-colors duration-500">
      
      {/* Fluid Shape 1: Cyan/Blue */}
      <motion.div
        animate={{ 
          rotate: [0, 360], 
          scale: [1, 1.1, 1],
          borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/30% 30% 70% 70%", "60% 40% 30% 70%/60% 30% 70% 40%"]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] bg-gradient-to-tr from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900 opacity-60 dark:opacity-30 blur-[80px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Fluid Shape 2: Purple/Pink */}
      <motion.div
        animate={{ 
          rotate: [360, 0], 
          scale: [1, 1.2, 1],
          borderRadius: ["30% 70% 70% 30%/30% 30% 70% 70%", "60% 40% 30% 70%/60% 30% 70% 40%", "30% 70% 70% 30%/30% 30% 70% 70%"]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] bg-gradient-to-bl from-purple-400 to-pink-400 dark:from-purple-800 dark:to-indigo-900 opacity-60 dark:opacity-30 blur-[90px] mix-blend-multiply dark:mix-blend-screen"
      />

      {/* Core Center Glow for 3D Depth */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-indigo-300/50 dark:bg-indigo-600/30 rounded-full blur-[120px]"
      />

      {/* Premium Noise Overlay (Gives it that textured glass feel) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;