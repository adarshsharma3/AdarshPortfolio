import React from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Cards';
import Card2 from './Cards2';
import Card3 from './Cards3';
import gifImage from '../assets/develop.gif'; // Replace with the actual path to your GIF

const CardContainer = () => {
  const { ref: cardRef, inView: cardsInView } = useInView({
    threshold: 0.10, // Trigger when 10% of the element is in view
    triggerOnce: true, //multiple trigger baar
  });

  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.10, // Trigger when 10% of the heading is in view
    triggerOnce: false, //
  });

  return (
    <div className="flex flex-col items-center justify-center py-10 sm:px-0">
      {/* Heading Section */}
      <div className="flex items-center justify-center mb-20">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-6xl font-bold transition-transform duration-700 ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Problems Solved
        </h2>
        <img
          src={gifImage}
          alt="Animated GIF"
          className={`ml-4 transition-transform duration-700 ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
          style={{ width: '100px', height: '100px' }} // Adjust size as needed
        />
      </div>

      {/* Cards Section */}
      <div
        ref={cardRef}
        className={`flex flex-wrap justify-center gap-8 transition-transform duration-700 ${
          cardsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Card />
        <Card3 />
        <Card2 />
      </div>
    </div>
  );
};

export default CardContainer;