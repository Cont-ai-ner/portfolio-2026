import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center z-10 relative mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Lakkoju Ganesh Koushik. All rights reserved.
        </p>
        <div className="flex gap-6 font-medium text-gray-700 dark:text-gray-300">
          <motion.a href="https://github.com/Cont-ai-ner" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#3b82f6' }}>
            GitHub
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/lakkoju-ganesh-koushik" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, color: '#3b82f6' }}>
            LinkedIn
          </motion.a>
          <motion.a href="mailto:glakkoju2@gitam.in" whileHover={{ scale: 1.1, color: '#3b82f6' }}>
            Email
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;