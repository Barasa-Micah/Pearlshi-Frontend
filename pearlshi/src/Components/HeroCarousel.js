import React, { useState} from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import table1 from "../Assets/table1.png";
import table2 from "../Assets/table2.png";
import table4 from "../Assets/table4.png";
import buffet from "../Assets/buffet.png";



const HeroCarousel = () => {
    const slides = [table1, table2, table4, buffet];
    const [currentIndex, setCurrentIndex] = useState(0);


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length -1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);

    
  };
 
  const goToSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };

 
  


    return(
        <>
        <div className='max-w-[100%] h-screen w-full m-auto py-16 px-4 hidden lg:block relative group'>
        
            <div style={{backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full rounded-2xl  bg-cover bg-no-repeat autoplay-true duration-300'>
            {/*left Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={20}/>
            </div>

            {/*right Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={20}/>
            </div>


            </div>
            <div 
                key={currentIndex} 
                onClick={() => goToSlide(currentIndex)}
                className='flex top-4 justify-center py-2'>
                {slides.map((slide, currentIndex) => (
                    <div className='text-2xl cursor-pointer'>
                        <RxDotFilled />

                        </div>
                ))}
            </div>
           
        </div>

        <div className='max-w-[100%] h-[680px] w-full m-auto py-16 px-4 hidden md:block lg:hidden relative group'>
        
            <div style={{backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full rounded-2xl bg-center bg-cover autoplay-true duration-300'>
            {/*left Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={20}/>
            </div>

            {/*right Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={20}/>
            </div>


            </div>
            <div 
                key={currentIndex} 
                onClick={() => goToSlide(currentIndex)}
                className='flex top-4 justify-center py-2'>
                {slides.map((slide, currentIndex) => (
                    <div className='text-2xl cursor-pointer'>
                        <RxDotFilled />

                        </div>
                ))}
            </div>
           
        </div>

        <div className='max-w-[100%] h-[400px] w-full m-auto py-16 px-4 md:hidden relative group'>
        
            <div style={{backgroundImage: `url(${slides[currentIndex]})` }} className='w-full h-full rounded-2xl bg-center bg-cover autoplay-true duration-300'>
            {/*left Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={20}/>
            </div>

            {/*right Arrow*/}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={20}/>
            </div>


            </div>
            <div 
                key={currentIndex} 
                onClick={() => goToSlide(currentIndex)}
                className='flex top-4 justify-center py-2'>
                {slides.map((slide, currentIndex) => (
                    <div className='text-2xl cursor-pointer'>
                        <RxDotFilled />

                        </div>
                ))}
            </div>
           
        </div>
       
    
        </>
    );
  }


// const HeroCarousel = () => {
//     const settings = {
//         dots: true,
//         fade: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         waitForAnimate: false
//     };
//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//         <div>
//           <img src={baseUrl + "../"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract02.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract03.jpg"} />
//         </div>
//         <div>
//           <img src={baseUrl + "/abstract04.jpg"} />
//         </div>
//       </Slider>
          
//         </div>
//       );

// }

export default HeroCarousel;
