import React from 'react';

import styled from 'styled-components';


const Card = ({ imageSrc, title }) => {

  return (

    <StyledWrapper>
       
      <section id="card1" className="card">

        <img src={imageSrc} alt={title} height={80} width={80} className="bi bi-image-fill " />

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
    width: 119px;
    height: 119px;
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
    padding: 20px;
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
    padding-top:18px;
    padding-left: 3px;
    padding right: 4px
    font-size: 24px;
    color: #000000;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #000000;
    line-height: 1.4;
  }
  /* Commands to change the shadows in dark mode
  @media (prefers-color-scheme: dark) {
    .card:hover {
    box-shadow: 0 8px 16px #000000;
    }
  }*/`;

export default Card;
