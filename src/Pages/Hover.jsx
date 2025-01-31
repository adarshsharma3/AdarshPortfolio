import React from 'react';
import styled from 'styled-components';
import luffy from '../assets/G5.png'
const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img

          src={luffy}

          alt="Luffy"

          className="h-auto  rounded-lg border-4 border-transparent transition-all duration-400 ease-in-out"

        />
        <div className="heading">Contact Here!</div>
        <div className="icons">
          <a href="https://www.instagram.com/adarsh_sharma374?igsh=MWlrdHlzcHA0NXdo" className="instagram">
            <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.0459 7.5H17.0559M3.0459 12.5C3.0459 9.986 3.0459 8.73 3.3999 7.72C3.71249 6.82657 4.22237 6.01507 4.89167 5.34577C5.56096 4.67647 6.37247 4.16659 7.2659 3.854C8.2759 3.5 9.5329 3.5 12.0459 3.5C14.5599 3.5 15.8159 3.5 16.8269 3.854C17.7202 4.16648 18.5317 4.67621 19.201 5.34533C19.8702 6.01445 20.3802 6.82576 20.6929 7.719C21.0459 8.729 21.0459 9.986 21.0459 12.5C21.0459 15.014 21.0459 16.27 20.6929 17.28C20.3803 18.1734 19.8704 18.9849 19.2011 19.6542C18.5318 20.3235 17.7203 20.8334 16.8269 21.146C15.8169 21.5 14.5599 21.5 12.0469 21.5C9.5329 21.5 8.2759 21.5 7.2659 21.146C6.37268 20.8336 5.56131 20.324 4.89202 19.6551C4.22274 18.9862 3.71274 18.1751 3.3999 17.282C3.0459 16.272 3.0459 15.015 3.0459 12.501V12.5ZM15.8239 11.94C15.9033 12.4387 15.8829 12.9481 15.7641 13.4389C15.6453 13.9296 15.4304 14.392 15.1317 14.7991C14.833 15.2063 14.4566 15.5501 14.0242 15.8108C13.5917 16.0715 13.1119 16.2439 12.6124 16.318C12.1129 16.392 11.6037 16.3663 11.1142 16.2422C10.6248 16.1182 10.1648 15.8983 9.76082 15.5953C9.35688 15.2923 9.01703 14.9123 8.76095 14.4771C8.50486 14.0419 8.33762 13.5602 8.2689 13.06C8.13201 12.0635 8.39375 11.0533 8.99727 10.2487C9.6008 9.44407 10.4974 8.91002 11.4923 8.76252C12.4873 8.61503 13.5002 8.86599 14.3112 9.46091C15.1222 10.0558 15.6658 10.9467 15.8239 11.94Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="https://github.com/adarshsharma3" className="x">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/adarsh-sharma-3bb87027b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="discord">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16" xmlSpace="preserve">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* HOLD THE ASTRONAUT */

  .card {
    position: relative;
    width: 19em;
    height: 28.7em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #171717;
    color: white;
    font-family: Montserrat;
    font-weight: bold;
    padding: 1em 2em 1em 1em;
    border-radius: 20px;
    overflow: hidden;
    z-index: 1;
    row-gap: 1em;
  }
  .card img {
    width: 12em;
    margin-right: 1em;
    animation: move 10s ease-in-out infinite;
    z-index: 5;
  }
  .image:hover {
    cursor: -webkit-grab;
    cursor: grab;
  }

  .icons svg {
    width: 20px;
    height: 20px;
  }

  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    inset: -3px;
    border-radius: 10px;
    background: radial-gradient(#858585, transparent, transparent);
    transform: translate(-5px, 250px);
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover::before {
    width: 150%;
    height: 100%;
    margin-left: -4.25em;
  }
  .card::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 20px;
    background: rgb(23, 23, 23, 0.7);
    transition: all 0.4s ease-in-out;
    // z-index: -1;
  }

  .heading {
    z-index: 2;
    transition: 0.4s ease-in-out;
  }
  .card:hover .heading {
    letter-spacing: 0.025em;
  }

  // .heading::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 2px;
  //   height: 2px;
  //   border-radius: 50%;
  //   opacity: 1;
  //   box-shadow: 220px 118px #fff, 280px 176px #fff, 40px 50px #fff,
  //     60px 180px #fff, 120px 130px #fff, 180px 176px #fff, 220px 290px #fff,
  //     520px 250px #fff, 400px 220px #fff, 50px 350px #fff, 10px 230px #fff;
  //   z-index: -1;
  //   transition: 1s ease;
  //   animation: 1s glowing-stars linear alternate infinite;
  //   animation-delay: 0s;
  // }
  .icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 140px 20px #fff, 425px 20px #fff, 70px 120px #fff, 20px 130px #fff,
      110px 80px #fff, 280px 80px #fff, 250px 350px #fff, 280px 230px #fff,
      220px 190px #fff, 450px 100px #fff, 380px 80px #fff, 520px 50px #fff;
    z-index: -1;
    transition: 1.5s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.4s;
  }
  .icons::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    opacity: 1;
    box-shadow: 490px 330px #fff, 420px 300px #fff, 320px 280px #fff,
      380px 350px #fff, 546px 170px #fff, 420px 180px #fff, 370px 150px #fff,
      200px 250px #fff, 80px 20px #fff, 190px 50px #fff, 270px 20px #fff,
      120px 230px #fff, 350px -1px #fff, 150px 369px #fff;
    z-index: -1;
    transition: 2s ease;
    animation: 1s glowing-stars linear alternate infinite;
    animation-delay: 0.8s;
  }
  .card:hover .heading::before,
  .card:hover .icons::before,
  .card:hover .icons::after {
    filter: blur(3px);
  }

  .image:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
//   .image:active + .heading::before {
//     box-shadow: 240px 20px #9b40fc, 240px 25px #9b40fc, 240px 30px #9b40fc,
//       240px 35px #9b40fc, 240px 40px #9b40fc, 242px 45px #9b40fc,
//       246px 48px #9b40fc, 251px 49px #9b40fc, 256px 48px #9b40fc,
//       260px 45px #9b40fc, 262px 40px #9b40fc;
//     animation: none;
//     filter: blur(0);
//     border-radius: 2px;
//     width: 0.45em;
//     height: 0.45em;
//     scale: 0.65;
//     transform: translateX(9em) translateY(1em);
//   }
//   .image:active ~ .icons::before {
//     box-shadow: 262px 35px #9b40fc, 262px 30px #9b40fc, 262px 25px #9b40fc,
//       262px 20px #9b40fc, 275px 20px #9b40fc, 275px 24px #9b40fc,
//       275px 28px #9b40fc, 275px 32px #9b40fc, 275px 36px #9b40fc,
//       275px 40px #9b40fc, 275px 44px #9b40fc, 275px 48px #9b40fc;
//     animation: none;
//     filter: blur(0);
//     border-radius: 2px;
//     width: 0.45em;
//     height: 0.45em;
//     scale: 0.65;
//     transform: translateX(9em) translateY(1em);
//   }
//   .image:active ~ .icons::after {
//     box-shadow: 238px 60px #9b40fc, 242px 60px #9b40fc, 246px 60px #9b40fc,
//       250px 60px #9b40fc, 254px 60px #9b40fc, 258px 60px #9b40fc,
//       262px 60px #9b40fc, 266px 60px #9b40fc, 270px 60px #9b40fc,
//       274px 60px #9b40fc, 278px 60px #9b40fc, 282px 60px #9b40fc,
//       234px 60px #9b40fc, 234px 60px #9b40fc;
//     animation: none;
//     filter: blur(0);
//     border-radius: 2px;
//     width: 0.45em;
//     height: 0.45em;
//     scale: 0.65;
//     transform: translateX(9em) translateY(1.25em);
//   }

  .heading::after {
    content: "";
    top: -8.5%;
    left: -8.5%;
    position: absolute;
    width: 7.5em;
    height: 7.5em;
    border: none;
    outline: none;
    border-radius: 50%;
    background: #f9f9fb;
    box-shadow: 0px 0px 100px rgba(229, 163, 40, 0.8),
      0px 0px 100px rgba(238, 164, 45, 0.8), inset rgb(237, 191, 82) 0px 0px 40px -12px;
    transition: 0.4s ease-in-out;
    z-index: -1;
  }
  .card:hover .heading::after {
    box-shadow: 0px 0px 200px rgb(220, 190, 58),
      0px 0px 200px rgb(228, 191, 42), inset rgb(240, 181, 32) 0px 0px 40px -12px;
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    column-gap: 1em;
    z-index: 1;
  }

  .instagram,
  .x,
  .discord {
    position: relative;
    transition: 0.4s ease-in-out;
  }
  .instagram:after,
  .x:after,
  .discord:after {
    content: "";
    position: absolute;
    width: 0.5em;
    height: 0.5em;
    left: 0;
    background-color: white;
    box-shadow: 0px 0px 10px rgba(233, 233, 233, 0.5),
      0px 0px 10px rgba(192, 192, 192, 0.5);
    border-radius: 50%;
    z-index: -1;
    transition: 0.3s ease-in-out;
  }
  .instagram svg path,
  .x svg path,
  .discord svg path {
    stroke: #808080;
    transition: 0.4s ease-in-out;
  }
  .instagram:hover svg path {
    stroke: #cc39a4;
  }
  .x:hover svg path {
    stroke: rgb(0, 0, 0);
  }
  .discord:hover svg path {
    stroke:rgb(9, 160, 230);
  }
  .instagram svg,
  .x svg,
  .discord svg {
    transition: 0.3s ease-in-out;
  }
  .instagram:hover svg {
    scale: 1.4;
  }
  .x:hover svg,
  .discord:hover svg {
    scale: 1.25;
  }
  .instagram:hover:after,
  .x:hover:after,
  .discord:hover:after {
    scale: 4;
    transform: translateX(0.09em) translateY(0.09em);
  }

  .instagram::before {
    content: "";
    position: absolute;
    top: -700%;
    left: 1050%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    transition: 1s ease;
    animation-delay: 1s;
  }
  .x::before {
    content: "";
    position: absolute;
    top: -1300%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 3s;
  }
  .discord::before {
    content: "";
    position: absolute;
    top: -2100%;
    left: 850%;
    rotate: -45deg;
    width: 5em;
    height: 1px;
    background: linear-gradient(90deg, #ffffff, transparent);
    animation: 4s shootingStar ease-in-out infinite;
    animation-delay: 5s;
  }
  .card:hover .instagram::before,
  .card:hover .x::before,
  .card:hover .discord::before {
    filter: blur(3px);
  }
  .image:active ~ .icons .instagram::before,
  .image:active ~ .icons .x::before,
  .image:active ~ .icons .discord::before {
    animation: none;
    opacity: 0;
  }

  @keyframes shootingStar {
    0% {
      transform: translateX(0) translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateX(-55em) translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateX(-70em) translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateX(0) translateY(0);
      opacity: 0;
    }
  }

  @keyframes move {
    0% {
      transform: translateX(0em) translateY(0em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(0em) translateY(0em);
    }
  }

  @keyframes glowing-stars {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }`;

export default Card;
