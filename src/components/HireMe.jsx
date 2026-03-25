import { motion } from 'framer-motion';

const HireMe = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.a
        href="mailto:glakkoju2@gitam.in?subject=Reaching out regarding a potential opportunity"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all duration-300 relative group"
      >
        <span className="font-bold text-sm tracking-wide">Hire Me</span>
        
        {/* Pulsing ring effect */}
        <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:animate-ping"></span>
      </motion.a>
    </div>
  );
};

export default HireMe;