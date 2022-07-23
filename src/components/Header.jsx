import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {

    const [nav, setNav] = useState(false);
    return(
        <div className="w-full bg-black sticky top-0 left-0">
        <div className="md:px-12 flex items-center justify-between mx-auto max-w-screen-xl h-[9vh] text-white px-4">
            <div>
                <h1 className="font-signature text-3xl cursor-pointer"><Link to="home" smooth duration={500}>Laxman</Link></h1>
            </div>
            <ul className="hidden md:flex">
                <li className="mx-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="home" smooth duration={500}>Home</Link></li>
                <li className="mx-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="about" smooth duration={500}>About</Link></li>
                <li className="mx-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="portfolio" smooth duration={500}>Portfolio</Link></li>
                <li className="mx-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="experience" smooth duration={500}>Experience</Link></li>
                <li className="mx-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="contact" smooth duration={500}>Contact</Link></li>
            </ul>
            <div onClick={() => setNav(!nav)} className="z-10 cursor-pointer md:hidden" >
                {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>
            {
                nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white text-xl bg-gradient-to-b from-black via-black to-gray-800">
                    <li className="my-4  cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link to="home" onClick={() => setNav(!nav)} smooth duration={500}>Home</Link></li>
                    <li className="my-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link onClick={() => setNav(!nav)} to="about" smooth duration={500}>About</Link></li>
                    <li className="my-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link onClick={() => setNav(!nav)} to="portfolio" smooth duration={500}>Portfolio</Link></li>
                    <li className="my-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link onClick={() => setNav(!nav)} to="experience" smooth duration={500}>Experience</Link></li>
                    <li className="my-4 cursor-pointer hover:text-gray-400 duration-150 ease-in"><Link onClick={() => setNav(!nav)} to="contact" smooth duration={500}>Contact</Link></li>
                </ul>
                )
            }
        </div>
        </div>
    )
}

export default Header;