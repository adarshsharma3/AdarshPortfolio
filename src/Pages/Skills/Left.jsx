import React from 'react';
import Card from './CardTech'; // Adjust the import path as necessary
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'
const ParentComponent = () => {
  // Data for the first card
  const cardData1 = {
    imageSrc: git, // Replace with your first image path
    title: 'Git Hub'
  };

  // Data for the second card
  const cardData2 = {
    imageSrc: figma, // Replace with your second image path
    title: 'Check My Designs Here '
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className='text-3xl mb-3 font-bold  pt-7'>Tools</h1>  
      <a href="https://github.com/adarshsharma3" target="_blank" rel="noopener noreferrer">

<Card imageSrc={cardData1.imageSrc} title={cardData1.title} />

</a>
      <a href="https://drive.google.com/file/d/1nOPlWiJlt7Iv4omPligENPe1TBFvO4MT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">

      <Card imageSrc={cardData2.imageSrc} title={cardData2.title} />

</a>
    </div>
  );
}

export default ParentComponent;