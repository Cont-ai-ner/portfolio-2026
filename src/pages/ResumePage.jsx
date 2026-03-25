import { motion } from 'framer-motion';

const ResumePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header & Download Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-blue-400 mb-6 md:mb-0"
          >
            Experience & Education
          </motion.h1>
          
          {/* Make sure Resume.pdf is exactly what your file is named in the public folder */}
          <motion.a 
            href="/Resume.pdf" 
            download="Lakkoju_Ganesh_Koushik_Resume.pdf"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-colors flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Download Resume (PDF)
          </motion.a>
        </div>

        {/* Experience Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Experience</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold text-blue-300">Analyst - Consultative Offerings</h3>
                <span className="text-gray-400 text-sm">Offer Received Sept 2025</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">Deloitte</h4>
              <p className="text-gray-400">Selected for a strategic consulting role emphasizing analytical problem-solving, technical depth, and client-focused innovation.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold text-blue-300">Research Assistant & VR Developer Intern</h3>
                <span className="text-gray-400 text-sm">May 2024 - Present</span>
              </div>
              <h4 className="text-lg text-gray-300 mb-4">Center for eXtended Reality (CXR), GITAM</h4>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Collaborated on cultural VR project with Coventry University (Sankranthi festival immersion).</li>
                <li>Designed NPC AI navmesh roaming, motion-captured sequences, and optimized performance for Meta Quest 2.</li>
                <li>Contributing to XR prototyping, patent filing and optimized training modules adopted by the research center.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Education</h2>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-blue-300">B.Tech in Computer Science & Engineering</h3>
              <span className="text-gray-400 text-sm">2022 - 2026</span>
            </div>
            <h4 className="text-lg text-gray-300 mb-2">GITAM Deemed to be University, Visakhapatnam</h4>
            <p className="text-gray-400 mb-2">CGPA: 7.71/10 | Final Semester</p>
            <p className="text-gray-500 text-sm">Relevant Coursework: Machine Learning, Computer Vision, Data Structures & Algorithms, Game Development.</p>
          </div>
        </motion.section>

        {/* Technical Skills Section */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">Technical Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-300 mb-3">3D & Neural Rendering</h3>
              <p className="text-gray-400 leading-relaxed">3D Gaussian Splatting (3DGS), NeRF, COLMAP, SLAM, Generative 3D (Stable Diffusion, TripoSR)</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-300 mb-3">XR & Unity Development</h3>
              <p className="text-gray-400 leading-relaxed">Unity (C# Scripting, VR Integration), Meta Quest 2, Navmesh AI, Motion Capture</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-300 mb-3">AI & Programming</h3>
              <p className="text-gray-400 leading-relaxed">Python (Advanced), C#, Java, PyTorch, Hugging Face Diffusers, k-NN, SAM</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-blue-300 mb-3">Tools & Hardware</h3>
              <p className="text-gray-400 leading-relaxed">CUDA, ROS2, Jetson Nano, Intel RealSense D435, Kinect V2, Git, Colab (T4 GPUs)</p>
            </div>

          </div>
        </motion.section>

      </div>
    </div>
  );
};

export default ResumePage;