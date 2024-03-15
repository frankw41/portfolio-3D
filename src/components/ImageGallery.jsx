import React, { useState, useEffect } from "react";

const ImageGallery = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    let intervalId;

    if (images.length > 1 && !isHovered) {
      intervalId = setInterval(goToNext, autoplayInterval);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setDirection("prev");
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setDirection("next");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative w-full h-[230px] z-[1]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : direction === "next"
                ? index < currentIndex
                  ? "translate-x-full"
                  : "-translate-x-full"
                : (index > currentIndex
                    ? "-translate-x-full"
                    : "translate-x-full") + " opacity-0"
            }`}
          />
        ))}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-black 
              bg-opacity-50 text-white flex justify-center items-center rounded-full cursor-pointer z-10"
            >
              {"<"}
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-black
               bg-opacity-50 text-white flex justify-center items-center rounded-full cursor-pointer z-10"
            >
              {">"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
