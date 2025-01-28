import React from 'react';

import styled from 'styled-components';


const Card = ({ imageSrc, title }) => {

  return (

    <StyledWrapper>

      <section id="card1" className="card">

        <img src={imageSrc} alt={title} height={150} width={150} className="bi bi-image-fill " />
    
        {/* <h5 className='text-black'>Click!</h5> */}
        <div className="card__content">

          <p className="card__title">{title}</p>

        </div>

      </section>

    </StyledWrapper>

  );

}
const StyledWrapper = styled.div`
  section.card {
    position: relative;
    width: 250px;
    height: 250px;
    background-color:rgb(255, 255, 255);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .card svg {
    fill: #000;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border-radius: 3px;
  }
  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px #000000;
    background-color: #f2f2f2;
    color: #ffffff;
  }

  .card__content {
    color: #000000;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    padding-top:81px;
    padding-left: 5px;
    font-size: 25px;
    color: #000000;
    font-weight: 1000;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 30px;
    color: #000000;
    line-height: 1.4;
  }


  @media (max-width: 600px) {
    .card__title {
        font-size: 15px; /* Adjust font size for smaller screens */
    }
}

 @media (max-width: 640px) {
        .card__title {
      padding-top: 43px;
      // padding-left: 5px;
      // padding-right: 18px;
      font-size: 18px; /* Adjust font size for smaller screens */
    }

  /* Commands to change the shadows in dark mode*/
  @media (prefers-color-scheme: dark) {
    .card:hover {
    box-shadow: 0 8px 16spx #000000;
    }
      

    .card__content {
      padding: 10px; /* Adjust padding for smaller screens */
    }
}
  }
  }`;

export default Card;
