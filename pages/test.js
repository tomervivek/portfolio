import React, { useState } from 'react';

const Card = () => {
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
  };
  return (
    <div style={{ ...gradientStyle }} onMouseMove={handleMouseMove}>
  <div className="max-w-md   mx-auto   border rounded-md ">
  <div className="p-4">
    <div  >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 my-2 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>

      <h2 className="text-xl my-2 text-start text-black font-bold">Card Heading</h2>
      <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div></div>
  );
};

export default Card;
