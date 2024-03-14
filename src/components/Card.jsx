import React from 'react';

const Card = ({ imageSrc, name, link }) => {
  return (
    <a href={link}>
      <div className="m-4 relative overflow-hidden bg-gray-600 sm:w-[350] sm:h-[200] md:w-[550px] md:h-[350px] fade-in-card-y">
        <img
          className="object-cover w-full h-full transition-transform duration-1000 ease-in-out transform scale-100 hover:scale-[1.25]"
          src={imageSrc}
          alt="Card Image"
          />
      </div>
    </a>
  );
};

export default Card;