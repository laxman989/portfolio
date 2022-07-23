import React from "react";
import Exp1 from "../assets/html.png";
import Exp2 from "../assets/css.png";
import Exp3 from "../assets/javascript.png";
import Exp4 from "../assets/react.png";
import Exp5 from "../assets/nextjs.png";
import Exp6 from "../assets/tailwind.png";
import Exp7 from "../assets/node.png";
import Exp8 from "../assets/github.png";

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: Exp1,
            title: "HTML",
            shadow: "shadow-orange-700"
        },
        {
            id: 2,
            src: Exp2,
            title: "CSS",
            shadow: "shadow-blue-700"
        },
        {
            id: 3,
            src: Exp3,
            title: "JavaScript",
            shadow: "shadow-yellow-500"
        },
        {
            id: 4,
            src: Exp4,
            title: "React JS",
            shadow: "shadow-cyan-700"
        },
        {
            id: 5,
            src: Exp5,
            title: "Next JS",
            shadow: "shadow-gray-500"
        },
        {
            id: 6,
            src: Exp6,
            title: "Tailwind",
            shadow: "shadow-blue-300"
        },
        {
            id: 7,
            src: Exp7,
            title: "Node JS",
            shadow: "shadow-green-400"
        },
        {
            id: 8,
            src: Exp8,
            title: "Github",
            shadow: "shadow-gray-500"
        }
    ]

    return(
        <div name="experience" className="w-full bg-gradient-to-b from-black via-black to-gray-800 py-20 md:h-screen flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto flex flex-col text-gray-500 px-6">
                <div className="mb-10">
                    <h3 className="text-white md:text-4xl inline text-3xl font-bold border-b-2 md:border-b-4 border-">Experience</h3>
                </div>
                <p>These are the technologies I've worked with.</p>
                <br />
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 sm:px-0 px-6">
                    {
                        experiences.map(({id, src, title, shadow}) => (
                            <div className={`shadow-md ${shadow} rounded-md`} key={id}>
                                <img src={src} alt="work" className="rounded-md w-full aspect-video object-contain p-2" />
                                <p className="text-center py-2">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience;