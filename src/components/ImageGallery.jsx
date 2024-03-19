import { useState, useEffect } from "react";

const ImageGallery = ({ images, autoplayInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let intervalId;

    if (images.length > 1 && !isHovered) {
      intervalId = setInterval(goNextImage, autoplayInterval);
    }

    return () => clearInterval(intervalId);
  }, [currentIndex, isHovered]);

  const goNextImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  const goPrevImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return images.length - 1;
      return prevIndex - 1;
    });
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
      <div className="w-full h-full flex overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`object-contain w-full h-full block flex-shrink-0
              flex-grow-0 duration-300 ease-in-out`}
            style={{
              translate: `${-100 * currentIndex}% `,
            }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goPrevImage}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-8 bg-black 
            bg-opacity-50 text-white flex justify-center items-center rounded-full cursor-pointer hover:dark:bg-neutral-500 hover:bg-black"
          >
            {"<"}
          </button>
          <button
            onClick={goNextImage}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-8 bg-black 
            bg-opacity-50 text-white flex justify-center items-center rounded-full cursor-pointer hover:dark:bg-neutral-500 hover:bg-black"
          >
            {">"}
          </button>
        </>
      )}
      <div
        className="absolute bottom-[-15px] left-1/2 flex gap-1"
        style={{ translate: "-50%" }}
      >
        {images.length > 1 &&
          images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full cursor-pointer hover:scale-[1.3] ${
                index === currentIndex
                  ? "dark:bg-white bg-black"
                  : "bg-gray-500"
              }`}
            ></button>
          ))}
      </div>
    </div>
  );
};

export default ImageGallery;
