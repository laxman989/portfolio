import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    return(
        <div className="flex flex-col top-[65%] left-0 fixed">
            <ul>
                <li className="w-32 pl-5 p-2 ml-[-90px] bg-gray-600 hover:rounded-md hover:ml-[-10px] duration-150 ease-in"><a href="https://www.linkedin.com/in/laxman-choudhary-318931220/" target="__blank" rel="noreferrer" className="text-white flex items-center justify-between w-full">Linkedin <FaLinkedin size={25} /></a></li>
                <li className="w-32 pl-5 p-2 ml-[-90px] bg-gray-600 hover:rounded-md hover:ml-[-10px] duration-150 ease-in"><a href="https://github.com/laxman989" target="__blank" rel="noreferrer" className="text-white flex items-center justify-between w-full">Github <FaGithub size={25} /></a></li>
                <li className="w-32 pl-5 p-2 ml-[-90px] bg-gray-600 hover:rounded-md hover:ml-[-10px] duration-150 ease-in"><a href="mailto:laxmanchoudhary5685@gmail.com" target="__blank" rel="noreferrer" className="text-white flex items-center justify-between w-full">Mail <HiOutlineMail size={25} /></a></li>
                <li className="w-32 pl-5 p-2 ml-[-90px] bg-gray-600 hover:rounded-md hover:ml-[-10px] duration-150 ease-in"><a href="/LaxmanChoudhary-Resume.pdf" target="__blank" download={true} rel="noreferrer" className="text-white flex items-center justify-between w-full">Resume <BsFillPersonLinesFill size={25} /></a></li>
            </ul>
        </div>
    )
}

export default SocialLinks;