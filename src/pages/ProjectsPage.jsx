import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Automesh: Video-to-3D Environment Reconstruction (Capstone)",
    description: "End-to-end pipeline converting sequential video frames into photorealistic, navigable 3D environments using 3D Gaussian Splatting (3DGS) and COLMAP for accurate camera tracking/pose estimation. Managed hybrid local and cloud workflows, integrating optimized ply point clouds into Unity for real-time exploration.",
    techStack: ["3DGS", "COLMAP", "Unity", "PyTorch"]
  },
  {
    id: 2,
    title: "PointCast 3D: Real-Time Point Cloud Streaming to VR",
    description: "Built system streaming RGB video and 3D point clouds from Intel RealSense D435 on Jetson Nano to Meta Quest 2 in real-time. Implemented Python-Unity Wi-Fi communication and explored ROS2 for low-latency optimization.",
    techStack: ["VR", "Python", "Unity", "ROS2"]
  },
  {
    id: 3,
    title: "Drone Terrain Point Cloud Visualizer",
    description: "Developed a real-time 3D geospatial visualization tool in Unity simulating a drone flying over real-world terrain. Fetches satellite and terrain data via Cesium and MapTiler, rendering it as a dynamic 3D point cloud with real-time GPS-to-Mercator coordinate conversion.",
    techStack: ["Unity", "C#", "Cesium", "MapTiler", "OSM"]
  },
  {
    id: 4,
    title: "KinectSense: Gesture-Based Hand Tracking Pipeline",
    description: "Developed Unity C# pipeline fusing RealSense D435 and Kinect V2 for real-time gesture control. Trained a k-NN ML model on RGB+depth data for classification.",
    techStack: ["Unity", "C#", "k-NN ML", "WPF"]
  },
  {
    id: 5,
    title: "Sukoon: VR Relaxation App for Pediatric Dentistry",
    description: "Immersive VR application to reduce children's anxiety during dental procedures. Integrated binaural audio with engaging visuals and interactive calming elements.",
    techStack: ["VR", "Binaural Audio", "UI/UX"]
  },
  {
    id: 6,
    title: "NodeMCU IoT Motion Alert System",
    description: "Built an IoT-based system using NodeMCU to collect and transmit PIR sensor data to the cloud. Enabled real-time monitoring and control by triggering a remote buzzer upon detecting movement, demonstrating practical cloud-based IoT communication.",
    techStack: ["NodeMCU", "IoT", "C++", "Sensors", "Cloud Comm"]
  }
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-blue-400"
        >
          My Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-colors flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-gray-700 text-blue-300 text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;