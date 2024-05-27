import React from 'react';
import { Helmet } from 'react-helmet-async';

//components
import NavBar from '../Components/NavBar/NavBar';


const AboutUs = () => {
  return (
    <>
        <Helmet>
            <title>About Us | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <NavBar />
    </>
  )
}

export default AboutUs;