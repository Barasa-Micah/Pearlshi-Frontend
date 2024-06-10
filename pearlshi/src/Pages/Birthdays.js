"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import GalleryHero from '../Components/GalleryHero';
import GalleryNavigation from '../Components/GalleryNavigation';
import BirthdayMain from '../Components/BirthdayMain';


const Birthdays = () => {
    return (
        <>
        <GalleryHero />
        <GalleryNavigation />
        <div data-aos="zoom-in-right" data-aos-duration="1000">
        <BirthdayMain />    
        </div>  
        </>
    );

};

export default Birthdays;