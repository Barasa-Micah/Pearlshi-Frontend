import React from 'react';

const GalleryMain =() => {
    return(
        <>
          <div className='mx-auto mt-0 flex flex-wrap  w-full md:w-[70%] lg:w-[95%] justify-center items-center  gap-4 '>
            
            <div className='h-80 w-80 '>
                <img src={require('../Assets/Pearlshiimages/table23.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/chairs3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/coprate3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/table7.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/food16.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/Birthday.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/chairs4.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/food18.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className=' h-80 w-80 overflow-hidden'>
                <img src={require('../Assets/Pearlshiimages/chairs9.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className=' h-80 w-80 '>
                <img src={require('../Assets/Pearlshiimages/co-founder3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className=' h-80 w-80 '>
                <img src={require('../Assets/Pearlshiimages/fruits2.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className=' h-80 w-80 '>
                <img src={require('../Assets/Pearlshiimages/Birthday.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>

        

        </div>
        </>
    )
    
}
        


export default GalleryMain;
