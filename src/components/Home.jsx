import React from "react";
import HeroImage from "../assets/home-bg.webp";
import { Link } from "react-scroll";

const Home = () => {
    return(
        <div name="home" className="h-[91vh] w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div className="max-w-screen-xl h-full md:px-12 px-6 flex flex-col md:flex-row items-center justify-center mx-auto">
                <div className="max-w-lg">
                    <h2 className="text-white text-4xl sm:text-6xl font-bold">I'm a Full Stack Web Developer</h2>
                    <p className="text-gray-500 py-3 max-w-md">Currently, I love to work on designing the websites using technologies like React JS, Tailwind and Next JS.</p>
                    <button className="text-white px-6 py-3 my-6 rounded-md bg-gradient-to-br from-blue-400 to-blue-800 hover:scale-105 duration-150 ease-in"><Link to="portfolio" smooth duration={500}>Portfolio</Link></button>
                </div>
                <div className="max-w-md md:w-1/3 lg:w-1/2 mt-6 md:mt-0">
                    <img src={HeroImage} alt="img" className="rounded-2xl mx-auto w-[70%] md:w-full " />
                </div>
            </div>
        </div>
    )
}

export default Home;