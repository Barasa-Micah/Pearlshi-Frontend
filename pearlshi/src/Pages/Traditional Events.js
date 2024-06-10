"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GalleryHero from '../Components/GalleryHero';
import GalleryNavigation from '../Components/GalleryNavigation';
import TraditionalMain from '../Components/TraditionalMain';


const TraditionalEvents = () => {
    return (
        <>
        <GalleryHero />
        <GalleryNavigation />
        <div data-aos="zoom-in-right" data-aos-duration="1000">
        <TraditionalMain />     
        </div> 
        </>
    );

};

export default TraditionalEvents;