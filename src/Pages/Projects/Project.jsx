// src/ProjectsPage.js
import React from 'react';
import Card from './Card'; // Adjust the import path as necessary
import project1Image from '../../assets/SS1.png'; // Replace with your image path
import project2Image from '../../assets/SS2.png'; // Replace with your image path
import project3Image from '../../assets/SS3.png'; // Replace with your image path
import Tooltip from './Tool';

import Button from './Bttn';
const ProjectsPage = () => {
  const projects = [
    {
      imageSrc: project1Image,
      title: 'Please Check links on right  to view more!',
      description: '',
    },
    {
      imageSrc: project2Image,
      title: 'Please Check links on left  to view more!',
      description: '.',
    },
    {
      imageSrc: project3Image,
      title: 'Please Check links on right  to view more!',
      description: '',
    },
  ];

  return (
    <div className="p-6 sm:ml-10 pr-11">
      <h2 className="text-3xl sm:text-6xl font-bold text-center mb-6">My Projects</h2>

      {/* Project 1 */}
      <h3 className="text-xl text-center font-semibold  underline pb-3">Waste-Wise</h3>
      <div className="flex p-6 flex-col md:flex-row mb-6">

      
  <div className="flex-1 w-full md:w-1/3 ">
    <Card imageSrc={projects[0].imageSrc} title={projects[0].title} />
  </div>
  <div className="flex-1 pl-4 w-full md:w-2/3 flex flex-col justify-between"> {/* Added flex and justify-between */}
    <div>
      
      <p>Our website helps identify and classify different types of waste, making waste management easy and efficient. By guiding users on proper disposal methods, it promotes recycling, reduces environmental harm, and fosters sustainability. Whether it's biodegradable, recyclable, or hazardous waste, our platform ensures responsible handling, contributing to a cleaner and greener planet for current and future generations.</p>
    </div>
    {/* Tooltip positioned at the bottom */}
    <Tooltip 
      link1="https://github.com/adarshsharma3/waste-wise" 
      link2="https://waste-wise-mu.vercel.app/"
    />
  </div>
</div>

      {/* Project 2 */}
      <h3 className="text-xl text-center font-semibold  underline pb-3">Designique</h3>
      <div className="flex p-6 flex-col md:flex-row mb-6">
 
  <div className="flex-1 pl-4 w-full md:w-2/3 flex flex-col justify-between"> {/* Added flex and justify-between */}
    <div>
      {/* <h3 className="text-xl font-semibold  underline  pb-3">Designique</h3> */}
      <p>Designique is an innovative platform uniting manufacturers, consumers, and customers in a single, seamless space. It simplifies e-commerce by bridging the gap between production and purchasing. Manufacturers showcase their products, customers explore diverse options, and consumers enjoy a tailored experience. Designique fosters collaboration, enhances efficiency, and revolutionizes the way businesses and buyers connect for mutual success.</p>
    </div>
    {/* Tooltip positioned at the bottom */}
    <Tooltip 
      link1="https://github.com/adarshsharma3/Designique-rideHack24" 
      link2="https://designique-ride-hack24.vercel.app/"
    /> 
  </div>

  <div className="flex-1 w-full md:w-1/3 pt-4">
    <Card imageSrc={projects[1].imageSrc} title={projects[1].title} />
  </div>


</div>

      {/* Project 3 */}

      <h3 className="text-xl text-center font-semibold  underline pb-3">SpaceBooth</h3>
      <div className="flex p-6 flex-col md:flex-row mb-6">
      
  <div className="flex-1 w-full md:w-1/3">
    <Card imageSrc={projects[2].imageSrc} title={projects[2].title} />
  </div>
  <div className="flex-1 pl-4 w-full md:w-2/3 flex flex-col justify-between"> {/* Added flex and justify-between */}
    <div>
      {/* <h3 className="text-xl font-semibold">SpaceBooth</h3> */}
      <p>Space Booth is like the vast cosmos—a boundless platform where ideas, thoughts, and stories can shine like stars. Just as space connects galaxies, our blog connects people, fostering meaningful communication and exploration of diverse perspectives. It’s a digital universe where voices are heard, creativity thrives, and everyone’s thoughts find their unique orbit.</p>
    </div>
    {/* Tooltip positioned at the bottom */}
    <Tooltip 
      link1="https://github.com/adarshsharma3/SpaceBooth" 
      link2="https://github.com/adarshsharma3/SpaceBooth"
    />
  </div>
</div>

      {/* View More Projects Button */}
      <div className="text-center flex justify-center">
  <a href="https://github.com/adarshsharma3?tab=repositories" className="inline-block">
    <Button />
  </a>
</div>
    </div>
  );
};

export default ProjectsPage;