import React from "react";

const About = () => {
    return(
        <div name="about" className="w-full bg-gradient-to-b from-gray-800 via-black to-black py-20 md:h-screen flex items-center justify-center">
            <div className="max-w-screen-lg mx-auto flex flex-col text-gray-500 px-6">
                <div className="mb-10">
                    <h3 className="text-white md:text-4xl inline text-3xl font-bold border-b-2 md:border-b-4 border-">About</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt omnis at veritatis libero fugiat iusto vel reprehenderit culpa aliquid vero obcaecati eaque, mollitia nobis sunt accusamus delectus aperiam, veniam velit molestias minima dolor perspiciatis voluptatum molestiae pariatur. Consequuntur accusamus aperiam qui ducimus maiores necessitatibus. Id.</p>
                <br />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quaerat nemo voluptas minus at esse, assumenda voluptates sequi ipsum harum officiis dolores distinctio. Eius impedit similique veritatis debitis blanditiis nulla.</p>
            </div>
        </div>
    )
}

export default About;