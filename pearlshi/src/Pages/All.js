"use client"
import React, { useEffect } from "react";
import GalleryHero from '../Components/GalleryHero';
import GalleryNavigation from '../Components/GalleryNavigation';
import GalleryMain from '../Components/GalleryMain';
import AOS from 'aos';
import 'aos/dist/aos.css';



const All = () => {
    return (
        <>
        
        <GalleryHero />
        <GalleryNavigation />
        <div data-aos="zoom-in-right" data-aos-duration="1000">
        <GalleryMain />  
        </div>    
        </>
    );

};

export default All;