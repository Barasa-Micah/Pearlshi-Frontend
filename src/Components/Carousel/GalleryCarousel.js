import React, {useState} from 'react';
import image1 from "../../Assets/SlideShow/20240518091902_IMG_0340.jpg"

const images = [
    'image1.jpg',
    'image1.jpg',
    'image1.jpg',
    'image1.jpg',
    'image1.jpg'
];

const GalleryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
     const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     }

     const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
  return (
    <>
         <div className="relative w-full max-w-xl mx-auto">
      <div className="overflow-hidden relative h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2"
      >
        &gt;
      </button>
    </div>
    </>
  )
}

export default GalleryCarousel;