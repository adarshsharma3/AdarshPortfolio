import React from 'react';
import styled from 'styled-components';

const Card = ({ imageSrc, title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <img src={imageSrc} alt={title} className="card__image" />
        <div className="card__content">
          <p className="card__title">{title}</p>
        </div>
      </div>
      <p className="card__description">{description}</p> {/* Moved description here */}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack card and description vertically */
  align-items: center; /* Center align items */
  width: 100%; /* Full width of the parent */

  .card {
    position: relative;
    width: 450px; /* Default width */
    height: 280px; /* Default height */
    background: linear-gradient(-45deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    margin-bottom: 10px; /* Space between card and description */
  }

  .card__image {
    position: absolute; /* Make the image absolute to fill the card */
    top: 0; /* Align to the top */
    left: 0; /* Align to the left */
    width: 100%; /* Take full width */
    height: 100%; /* Take full height */
    object-fit: cover; /* Cover the entire card while maintaining aspect ratio */
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover {
    transform: rotate(-5deg) scale(1.1);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .card__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.6); /* Slightly transparent background */
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  }

  .card:hover .card__content {
    transform: translate(-50%, -50%) rotate(0deg);
    opacity: 1;
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #FFFF;
    font-weight: 700;
justify-content: center;
     align-items: center;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
    text-align: center; /* Center align description */
    width: 100%; /* Full width */
    max-width: 450px; /* Match card width */
  }

  .card:hover .card__image {
    //  scale: 0; /* Optional: Adjust the image scale on hover */
    transform:  rotate(0deg);
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .card {
      width: 90%; /* Adjust width for smaller screens */
      height: auto; /* Allow height to adjust based on content */
    }

    .card__title {
      font-size: 20px; /* Adjust title font size */
    }

    .card__description {
      font-size: 12px; /* Adjust description font size */
    }
  }

  @media (max-width: 480px) {
    .card {
      width: 100%; /* Full width on very small screens */
      height: 280px; /* Allow height to adjust based on content */
    }
    
    .card__title {
      font-size: 18px; /* Further adjust title font size */
    }

    .card__description {
      font-size: 10px; /* Further adjust description font size */
    }
  }
`;

export default Card;