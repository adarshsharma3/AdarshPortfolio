import React, { useState, useEffect } from "react";
import anime from "animejs";

const StarrySky = () => {
  const [dimensions, setDimensions] = useState({
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  });

  const numStars = 60;

  const starryNight = () => {
    anime({
      targets: "#sky .star",
      opacity: [
        { duration: 700, value: "0" },
        { duration: 700, value: "1" },
      ],
      easing: "linear",
      loop: true,
      delay: (_, i) => 50 * i,
    });
  };

  const shootingStars = () => {
    anime({
      targets: "#shootingstars .wish",
      easing: "linear",
      loop: true,
      delay: (_, i) => 1000 * i,
      opacity: [{ duration: 700, value: "1" }],
      width: [{ value: "150px" }, { value: "0px" }],
      translateX: 350,
    });
  };

  const randomRadius = () => Math.random() * 0.7 + 0.6;

  const getRandomX = () => Math.floor(Math.random() * dimensions.vw).toString();

  const getRandomY = () => Math.floor(Math.random() * dimensions.vh).toString();

  useEffect(() => {
    starryNight();
    shootingStars();
  }, []);

  return (
    <div >
      <svg id="sky" className="min-h-screen w-full">
        {Array.from({ length: numStars }).map((_, i) => (
          <circle
            cx={getRandomX()}
            cy={getRandomY()}
            r={randomRadius()}
            stroke="none"
            strokeWidth="0"
            fill="white"
            key={i}
            className="star"
          />
        ))}
      </svg>
      <div id="shootingstars">
        {Array.from({ length: numStars }).map((_, i) => (
          <div
            key={i}
            className="wish"
            style={{
              left: `${getRandomY()}px`,
              top: `${getRandomX()}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default StarrySky;
