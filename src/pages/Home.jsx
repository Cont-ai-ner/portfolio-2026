import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-4 text-center"
      >
        Hi, I'm Lakkoju Ganesh Koushik
      </motion.h1>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl text-blue-400 mb-6 text-center"
      >
        Incoming Analyst at Deloitte | AR/VR & 3D Reconstruction 
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-2xl text-center text-gray-400 mb-8"
      >
        Final year B.Tech student specializing in immersive technologies, spatial computing, and computer vision. Building the bridge between physical and digital worlds.
      </motion.p>
      
      {/* You can keep your existing HireMe component or buttons here */}
    </div>
  );
};

export default Home;