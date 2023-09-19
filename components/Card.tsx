// components/Card.tsx
import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src="/asset/flightlogo.png" alt="Next.js Logo" width={100} height={100} />
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries,
        but also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>
      <button>Explore</button>
    </div>
  );
};

export default Card;
