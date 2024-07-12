import React from 'react';
import { FaGithub, FaInstagram, FaJava, FaLinkedinIn} from "react-icons/fa";
import { SiMysql, SiReact, SiSpringboot } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Graphics Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hello World!!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ashish Chauhan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base justify-center font-bodyFont leading-6 tracking-wide" >
          I'm an avid computer science and engineering graduate from Ahmedabad University.
          Currently immersed in the world of BTech, I'm passionate about programming, data structures,
          and the nuances of software development. My journey extends to full-stack development, 
          and I find joy in the captivating artistry of photography and film-making.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon" link="www.google.com">
            <a href="https://www.linkedin.com/in/ashish-chauhan-49b4281ba/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
            </a>
            </span>

            <span className="bannerIcon">
            <a href="https://github.com/Ashish28c" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            </span>

            <span className="bannerIcon">
            <a href="https://www.instagram.com/ashish_2882/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <SiMysql/>
            </span>
            <span className="bannerIcon">
              <SiReact />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner