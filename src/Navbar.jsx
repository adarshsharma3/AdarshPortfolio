import { useState } from "react";
import {
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Navbar = ({ onNavClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Skills", section: "skills" },
    { name: "Problems", section: "problems" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" }
  ];

  const handleNavClick = (section) => {
    onNavClick(section);
    setToggleMenu(false);
  };

  return (
    <nav className=" w-full sm:w-[74vh] sm:bg-black rounded-3xl sm:mx-auto ">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center w-full">
          <div className="flex items-center gap-16 my-4">
            <div>
              <div className="flex gap-1 font-bold text-white items-center">
                <span>AS</span>
              </div>
            </div>
            <div className="hidden  lg:flex gap-8">
              {navItems.map((item) => (
                <button 
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className="text-white hover:text-gray-400"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-6">
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed z-40 w-full rounded-b-lg overflow-hidden flex flex-col lg:hidden gap-12 origin-top transition-all duration-300 ease-in-out ${
          toggleMenu ? "h-auto" : "h-0"
        }`}
      >
        <div className="px-8">
          <div className="bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-6 rounded-2xl flex flex-col gap-8 font-bold tracking-wider">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="text-black hover:text-gray-400 text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;