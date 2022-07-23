import React from "react";
import Work1 from "../assets/portfolio/arrayDestruct.jpg";
import Work2 from "../assets/portfolio/installNode.jpg";
import Work3 from "../assets/portfolio/navbar.jpg";
import Work4 from "../assets/portfolio/reactParallax.jpg";
import Work5 from "../assets/portfolio/reactSmooth.jpg";
import Work6 from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Work1
        },
        {
            id: 2,
            src: Work2
        },
        {
            id: 3,
            src: Work3
        },
        {
            id: 4,
            src: Work4
        },
        {
            id: 5,
            src: Work5
        },
        {
            id: 6,
            src: Work6
        },
    ]

    return(
        <div name="portfolio" className="w-full bg-gradient-to-b from-black via-black to-gray-800 py-20 md:h-screen flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto flex flex-col text-gray-500 px-6">
                <div className="mb-10">
                    <h3 className="text-white md:text-4xl inline text-3xl font-bold border-b-2 md:border-b-4 border-">Portfolio</h3>
                </div>
                <p>Check out some of my work here.</p>
                <br />
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:px-0 px-6">
                    {
                        portfolios.map(({id, src}) => (
                            <div className="shadow-md shadow-gray-700 rounded-md" key={id}>
                                <img src={src} alt="work" className="rounded-md" />
                                <div className="flex items-center justify-between px-6">
                                    <button className="mx-6 my-3 text-white hover:text-gray-500 duration-150 ease-in">Demo</button>
                                    <button className="mx-6 my-3 text-white hover:text-gray-500 duration-150 ease-in">Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;