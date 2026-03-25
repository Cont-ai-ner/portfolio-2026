import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
      
      {/* Blue Floating Orb */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/40 dark:bg-blue-600/20 rounded-full blur-[100px]"
      />

      {/* Purple/Indigo Floating Orb */}
      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, -100, 100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-400/40 dark:bg-indigo-600/20 rounded-full blur-[120px]"
      />

      {/* Subtle Grid Overlay to give it a tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default Background;