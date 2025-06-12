import React, { useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './Pages/About';
import CardContainer from './Pages/ProblemsSolved';
import CombinedComponent from './Pages/ContactUs';
import Left from './Pages/Skills/Left'
import Right from './Pages/Skills/Right'
import SkillsSection from './Pages/Skills/Skill';
import TechStack from './Pages/Skills/CardTech'
import Project from './Pages/Projects/Project'

import StarrySky from './Pages/Bg';
function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef= useRef(null);
  const contactRef= useRef(null);
  const problemsRef= useRef(null);
  const projectRef= useRef(null);
  const scrollToSection = (section) => {
    switch(section) {
      case 'home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'skills':
          skillsRef.current.scrollIntoView({ behavior: 'smooth' });
          break;
          case 'problems':
            problemsRef.current.scrollIntoView({ behavior: 'smooth' });
            break;
            case 'contact':
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
            break; 
            case 'projects':
            projectRef.current.scrollIntoView({ behavior: 'smooth' });
            break;   
      default:
        break;
    }
  };

  return (
    <>
    <div className='w-100% min-h-screen overflow-x-hidden'>
      
      <div className='fixed top-0 left-1/2 py-2 transform -translate-x-1/2 z-10 w-full'>
        <Navbar onNavClick={scrollToSection} />
      </div>
      <div className='w-100% overflow-hidden bg-black'>
        <div ref={homeRef} className='w-100% min-h-screen overflow-hidden'>
          <Home />
        </div>
        <div ref={aboutRef} className=' w-100% height-[60vh] '>
          <About />
        </div>
      </div>
      <div ref={skillsRef}>
      <SkillsSection/>
      </div>
      
      <a
        href="https://drive.google.com/file/d/1fJw6G0HCTt7y9o5pz1qQDpuHLnpiL4jV/view?usp=sharing"
        download
        className="fixed flex gap-1 z-50 bottom-0 left-0 m-3 px-1.5 py-1.5  text-xsm bg-transparent rounded  bg-white/40 text-black/60 transition duration-300"
      >
        <i className="fas fa-file-download p-1"></i>
        <h6>RESUME</h6> 
      </a>
   
    <div>

      <div className='' ref={problemsRef}>
      <CardContainer/>
      </div>
      <div ref={projectRef}>
        <Project/>
      </div>
    <div ref={contactRef}>
    <CombinedComponent/>

    </div>
    
   
    </div>
    
    </div>
    </>
  );
}

export default App;
