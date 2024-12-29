import React from "react";

function About() {
    return (
        <div
            name="About"
            className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
        >
            <div>
                <h1 className="text-3xl font-bold mb-5">About</h1>
                <p className="font-bold">
                    Hello, I'm Sujay, a passionate Web developer with a keen eye for MERN
                    Stack . With a background in IT, I strive to create impactful and
                    visually stunning Software solutions that leave a lasting impression.
                </p>
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Education & Training
                </h1>
                <span class="font-bold">
                    B.Tech (3rd Year) | KIET Group of Institutions, Ghaziabad (2024) | Computer Science and Engineering (Artificial Intelligence)

                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Skills & Expertise
                </h1>
                <span class="font-bold">
                    Proficient in C++ | Experienced with software tools such as VSCode, PyCharm, GitHub | Strong grasp of Data Structures and Algorithms | Excellent problem-solving skills | Good command of SQL | Effective communicator and collaborator
                </span>

                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Achievements & Awards
                </h1>
                <span className="font-semibold">
                    2-Star Rating, CodeChef,  Solved 700+ coding problems across different platforms,
                    Participated in 50+ contests
                </span>
                <br />
                <br />
                <h1 className="text-green-600 font-semibold text-xl">
                    Mission Statement
                </h1>
                <p className="font-bold">
                    My target is to create projects that address real-world problems through innovative and creative solutions. I aim to develop meaningful projects that can have a positive impact on society. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
                </p>

            </div>
            
        </div>
    );
}

export default About;
