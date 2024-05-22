import React from "react";
import { Helmet } from "react-helmet-async";

//Components
import NavBar from "../Components/NavBar/NavBar";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Pearlshi Caterers & Event Planners</title>
            </Helmet>
            <NavBar />
            <h1 className="text-red-500 font-bold">This is the homepage</h1>
        </>
    );
}

export default HomePage;