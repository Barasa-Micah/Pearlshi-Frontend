import React from 'react';

const GalleryHero = () => {
    return(
        <>
        <div className='mx-0 w-full mt-[120px] h-96 lg:h-screen relative'>
            <img src={require('../Assets/Pearlshiimages/table1.png')} alt='Gallery Header' className='top-0 left-0 object-cover w-full h-96 lg:h-screen ' />
            <div className='bg-black/45 absolute top-0 left-0 w-full h-96 lg:h-screen'/>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white '>
                <div className='md:left-[20%] m-auto  p-4'>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Pearlshi Events Gallery</h1>
                </div>
            </div>
        </div>
        </>
    );
};

export default GalleryHero;