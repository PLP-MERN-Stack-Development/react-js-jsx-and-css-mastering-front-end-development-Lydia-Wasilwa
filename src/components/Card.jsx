import React from "react";

const Card = ({ title, content, image }) => {
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-6 text-center">
      {image && <img src={image} alt={title} className="rounded-lg mb-4" />}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{content}</p>
    </div>
  );
};

export default Card;

