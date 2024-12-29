import React from "react";

import pic from "../../public/photo.avif";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";



import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p class="font-sans text-base leading-relaxed text-gray-800 text-justify text-sm md:text-md">
              <span class="font-bold text-sm ">Passion drives innovation!</span> Dive into my world of coding, where each line of code aims to create impactful solutions. I am currently pursuing a <span class="font-bold">B.Tech in Computer Science with AI</span> at <span class="font-bold">KIET Group of Institutions</span>, maintaining a stellar CGPA of <span class="font-bold">8.9</span>. My foundational education reflects academic excellence, scoring <span class="font-bold">93.6%</span> in Intermediate and <span class="font-bold">90%</span> in Matriculation. My technical expertise spans multiple programming languages and technologies, including <span class="font-bold">Python, TypeScript, React, Node.js, Next.js</span>, and a proficiency in <span class="font-bold">Data Structures and Algorithms (DSA)</span> with <span class="font-bold">C++</span>, demonstrated through solving numerous challenges on <span class="font-bold">LeetCode</span>.
            </p>

            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://leetcode.com/u/sujay_1245/" target="_blank">
                      < SiLeetcode className="hover:scale-110 duration-200 text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/sujaypandey1245/" target="_blank">
                      <FaLinkedin className="hover:scale-110 duration-200 text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.geeksforgeeks.org/user/sujay_1245/" target="_blank">
                      <SiGeeksforgeeks className="hover:scale-110 duration-200 text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="hover:scale-110 duration-200 text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row justify-between mt-6 md:mt-0 space-y-6 md:space-y-0">
          <a
            href="https://drive.google.com/file/d/1PO4v4kmS_RFzvuPUV3sAGFM1Mc1Yqg28/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 duration-200"
          >
            Open Resume
          </a>
        </div>


      </div>

      <hr />
    </>
  );
}

export default Home;
