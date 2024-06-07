import React from 'react';

const BirthdaysMain =() => {
    return(
        <>
          <div className='mx-auto mt-0 flex flex-wrap  w-full md:w-[70%] lg:w-[95%] justify-center items-center  gap-4 '>
            
          <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/b1.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/Birthday.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
        </div>
        </>
    )
    
}
        


export default BirthdaysMain;