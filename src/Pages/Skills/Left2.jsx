import React from 'react';
import styled from 'styled-components';
import Card2 from './CardTech'; // Adjust the import path as necessary
import git from '../../assets/git.png'
import figma from '../../assets/figma.png'

const Cards = () => {

    const cardData1 = {
        imageSrc: git, // Replace with your first image path
        title: 'Git Hub'
      };
    
      // Data for the second card
      const cardData2 = {
        imageSrc: figma, // Replace with your second image path
        title: 'Check My Designs Here!! '
      };


  return (
    <StyledWrapper>

<h1 className='  sm:text-3xl  mb-5 font-bold  pt-7 pb-11'>Click to visit!!!</h1>  
      <div className="cards">
        <div className="card red">
        <a href="https://github.com/adarshsharma3" target="_blank" rel="noopener noreferrer">

<Card2 imageSrc={cardData1.imageSrc} title={cardData1.title} />

</a>
        </div>
        <div className="card blue">
        <a href="https://drive.google.com/file/d/1nOPlWiJlt7Iv4omPligENPe1TBFvO4MT/view?usp=drive_link" target="_blank" rel="noopener noreferrer">

<Card2 imageSrc={cardData2.imageSrc} title={cardData2.title} />

</a>
        </div>
       
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .red {
    background-color:rgb(240, 228, 204);
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 260px;
    width: 260px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em; .card__title {
    margin: 0;
    padding-top:81px;
    padding-left: 5px;
    font-size: 10px;
    color: #000000;
    font-weight: 1000;
  }

    font-weight: 700;
  }

  .cards .card p.second-text {
    font-size: .7em;
  }
 .card__title {
    margin: 0;
    padding-top:81px;
    padding-left: 5px;
    font-size: 28px;
    color: #000000;
    font-weight: 1000;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
   /* Media Query for Small Screens */
  @media (max-width: 640px) {
    .cards {
    display: grid; /* Enables grid layout */
    place-items: center; /* Centers cards horizontally and vertically */
    height: 38vh; /* Full height of the viewport, if needed */
    // margin-right:27%;
}

.cards .card {
    height: 140px;
    width: 140px;
    /* Other styles */
}v
      
  
  `;

export default Cards;
