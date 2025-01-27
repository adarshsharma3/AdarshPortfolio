import React, { useEffect, useState } from 'react';
import gif from './assets/DS2.gif';
import Typewriter from 'typewriter-effect';

const Home = ({ onScrollDown }) => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const blurTimeout = setTimeout(() => {
      setIsBlurred(true);
    }, 100);
    return () => {
      clearTimeout(blurTimeout);
    };
  }, []);

  const scrollToNextSection = () => {
    onScrollDown && onScrollDown();
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`relative w-full h-full`}>
        <img
          src={gif}
          alt="Loading"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000`}
        />
        {isBlurred && (
          <div className="absolute inset-0 backdrop-blur-sm " />  // pointer-events-none
        )}
      </div>
      <div className={`absolute inset-0 flex items-center justify-center text-white text-center transition-opacity duration-1000 ${isBlurred ? 'opacity-100' : 'opacity-0'}`}>
        <div>
          <h1 className={`text-4xl font-bold fade-in`}>Hi, My Name is<br/> Adarsh Sharma</h1>
          <h2 className={`text-2xl mt-4 fade-in`}>
            <Typewriter
              options={{
                strings: ['A Web Developer', 'DSA Enthusiast', 'A UI/UX Enthusiast'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>
          <div className="mt-8 flex items-center justify-center">
            <button
              onClick={scrollToNextSection}
              className="px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-gray-900 transition duration-300 transform hover:scale-105"
            >
              Scroll Down for More
            </button>
            <div className="ml-2 animate-bounce border-2 border-white rounded-full p-1">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m0 0l-4-4m4 4l4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;