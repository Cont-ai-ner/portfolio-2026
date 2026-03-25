
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import FunPage from './pages/FunPage';
import Footer from './components/Footer';

export default function App(){
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? 'dark text-white' : 'text-black'}>
      <nav className="fixed top-0 w-full flex justify-between p-4 bg-white/50 dark:bg-black/50 glass z-10">
        <div className="font-bold">Kashyap</div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/fun">Fun</Link>
          <button onClick={()=>setDark(!dark)} className="px-3 py-1 rounded glass">{dark?'☀':'🌙'}</button>
        </div>
      </nav>
      <main className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<ResumePage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/fun" element={<FunPage/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}
