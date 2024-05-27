import React from 'react'
import { Helmet } from 'react-helmet-async';

//Components
import NavBar from '../Components/NavBar/NavBar';


const ContactPage = () => {
  return (
    <>  
        <Helmet>
            <title>Contact Us | Pearlshi Caterers & Event Planners</title>
        </Helmet>
        <NavBar />
        <body>
            <section className='bg-cover bg-no-repeat bg-center'
            style={{backgroundImage: "url"}}
            >

            </section>
        </body>
    </>
  )
}

export default ContactPage;