import React, { useState } from 'react';

const Tests = () => {
  const [gradientCoordinates, setGradientCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setGradientCoordinates({ x, y });
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientCoordinates.x}px ${gradientCoordinates.y}px, #C499F3, #ffffff)`,
    position: 'absolute',
    width: '400px',
    height: '400px',
  };

  return (
    <div className="h-screen w-full bg-red-100">
      <div style={{ ...gradientStyle }} onMouseMove={handleMouseMove}></div>
    </div>
  );
};

export default Tests;
