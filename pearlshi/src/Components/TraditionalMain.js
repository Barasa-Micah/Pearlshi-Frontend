import React from 'react';

const TraditionalMain =() => {
    return(
        <>
          <div className='mx-auto mt-0 flex flex-wrap  w-full md:w-[70%] lg:w-[95%] justify-center items-center  gap-4 '>
            
            <div className='h-80 w-80 '>
                <img src={require('../Assets/Pearlshiimages/t3.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/chairs3.png')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/t2.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            <div className='h-80 w-80'>
                <img src={require('../Assets/Pearlshiimages/t1.jpg')} alt='Gallery' className='rounded-md object-cover h-full w-full' />
            </div>
            
            
            

        

        </div>
        </>
    )
    
}
        


export default TraditionalMain;