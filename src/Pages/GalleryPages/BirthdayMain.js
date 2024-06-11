import React from 'react';

const BirthdaysMain =() => {
    return(
        <>
          <div className='mx-auto mt-0 flex flex-wrap  w-full md:w-[70%] lg:w-[95%] justify-center items-center  gap-4 '>
            
          <div className='h-80 w-80 overflow-hidden id="imageContainer1"'>
                <img src={require('../../Assets/SlideShow/20240518104820_IMG_0416.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
            <div className='h-80 w-80 overflow-hidden id="imageContainer2"'>
                <img src={require('../../Assets/SlideShow/20240518104820_IMG_0416.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full transform transition duration-500 hover:scale-125' />
            </div>
        </div>
        </>
    )
    
}



export default BirthdaysMain;