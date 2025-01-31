import React, { useEffect, useRef, useState } from 'react';
import Right from './Right';
import Left from './Left2';
// import './styles.css'; // Import your CSS file

const SkillsSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === leftRef.current) {
            setLeftVisible(true);
          } else if (entry.target === rightRef.current) {
            setRightVisible(true);
          }
        }
      });
    });

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-6 bg-transparent h-full">
      {/* Heading */}
      <h2 className="text-3xl sm:text-6xl font-bold text-center">Skills</h2>

      {/* Flexbox Container */}
      <div className="flex flex-col sm:flex-row w-full gap-4 h-full">
        {/* Left Component (1 part of the space) */}
        <div
          ref={leftRef}
          className={`flex-[1]  sm:flex-[1] p-2 sm:p-4  rounded-lg w-full h-full ${leftVisible ? 'slide-in-left' : ''}`}
        >
          <Left />
        </div>

        {/* Right Component (2 parts of the space) */}
        <div
          ref={rightRef}
          className={`flex-[2] sm:flex-[2] sm:pr-9 sm:mt-7 rounded-lg w-full h-full ${rightVisible ? 'slide-in-right' : ''}`}
        >
          <Right />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;