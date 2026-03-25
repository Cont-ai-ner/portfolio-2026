import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import FunPage from './pages/FunPage';
import Footer from './components/Footer';
import HireMe from './components/HireMe';
import Background from './components/Background';

// 1. Automatic Scroll-to-Top Component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // 2. Global Theme State
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle Tailwind's dark class on the root HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    // We removed the bg colors here because the Background component handles it now!
    <div className="min-h-screen flex flex-col transition-colors duration-500 text-gray-900 dark:text-white">
      
      <ScrollToTop />
      <Background /> {/* <-- Our new animated background */}

      {/* The Fixed Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto w-full z-10 relative">
        <Link to="/" className="text-xl font-bold tracking-wider hover:text-blue-500 transition-colors">
          Ganesh
        </Link>
        <div className="flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <Link to="/resume" className="hover:text-blue-500 transition-colors">Resume</Link>
          <Link to="/projects" className="hover:text-blue-500 transition-colors">Projects</Link>
          <Link to="/fun" className="hover:text-blue-500 transition-colors">Fun</Link>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xl"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* The Clean Routing Area */}
      <main className="flex-grow z-10 relative">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/fun" element={<FunPage />} />
        </Routes>
      </main>

      <HireMe />
      <Footer />
    </div>
  );
};

export default App;