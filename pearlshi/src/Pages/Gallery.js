import React from 'react';
import GalleryHero from '../Components/GalleryHero';
import GalleryNavigation from '../Components/GalleryNavigation';
import GalleryMain from '../Components/GalleryMain';


const Gallery = () => {
    return (
        <>
        <GalleryHero />
        <GalleryNavigation />
        <GalleryMain />      
        </>
    );

};

export default Gallery;