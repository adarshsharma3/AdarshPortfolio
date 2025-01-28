import React from 'react';
import Card from './Card2'; // Adjust the import path as necessary
import react1 from '../../assets/pngwing.com(2).png';
import react2 from '../../assets/express.png';
import react3 from '../../assets/node.png';
import react4 from '../../assets/mongodb.png';
import react5 from '../../assets/tailwind.png';
import react6 from '../../assets/github.png';
import react7 from '../../assets/flask.png';
import react8 from '../../assets/appwrite.png';
import react9 from '../../assets/postman.png';
import react10 from '../../assets/next.png';
import react11 from '../../assets/JS.png';
import react12 from '../../assets/TypeScript.png';

const ParentComponent = () => {
  const cardData3 = [
    { imageSrc: react1, title: 'React JS' },
    { imageSrc: react2, title: 'Express JS' },
    { imageSrc: react3, title: 'Node JS' },
    { imageSrc: react4, title: 'Mongo DB' },
    { imageSrc: react10, title: 'Next JS' },
    { imageSrc: react5, title: 'TailWind CSS' },
    { imageSrc: react6, title: 'Git Bash' },
    { imageSrc: react11, title: 'Java Script' },
    { imageSrc: react12, title: 'Type Script' },
    { imageSrc: react7, title: 'Flask' },
    { imageSrc: react8, title: 'App Write' },
    { imageSrc: react9, title: 'Postman' },
  ];

  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl text-center">Tech Stack</h2>
      {/* Grid for cards with gap */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-7">
        {cardData3.map((card, index) => (
          <div
            key={index}
            className="flex justify-center items-center sm:h-40 sm:w-40 lg:h-48 lg:w-48"
          >
            <Card imageSrc={card.imageSrc} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentComponent;
