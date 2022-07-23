import React from "react";

const Contact = () => {

    return(
        <div name="contact" className="w-full bg-gradient-to-b from-gray-800 via-black to-black py-20 md:h-screen">
            <div className="max-w-screen-lg mx-auto flex flex-col text-gray-500 px-6">
                <div className="mb-10">
                    <h3 className="text-white md:text-4xl inline text-3xl font-bold border-b-2 md:border-b-4 border-">Contact</h3>
                </div>
                <p>Submit the form below to get in touch with me.</p>
                <br />
                <div className="w-full md:max-w-lg sm:px-0 px-6">
                    <form action="https://getform.io/f/8715f1d1-6748-4ae1-84df-296847d8b4e2" method="POST">
                        <input type="text" name="name" placeholder="Name" className="text-black w-full block p-2 my-3 rounded-md border-2 focus:outline-none"/>
                        <input type="email" name="email" placeholder="email" className="text-black w-full block p-2 my-3 rounded-md border-2 focus:outline-none"/>
                        <textarea name="message"  rows={10} placeholder="Type your message" className="text-black w-full block p-2 my-3 rounded-md border-2 focus:outline-none"/>
                        <button className="text-white px-6 py-3 my-6 rounded-md bg-gradient-to-br from-blue-400 to-blue-800 hover:scale-105 duration-150 ease-in">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;