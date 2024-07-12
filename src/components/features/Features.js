import React from 'react'
import { AiFillCode, AiFillSetting } from "react-icons/ai";
import { FaGlobe, FaProjectDiagram, FaMicrochip } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols- md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Backend Development"
          des="Skilled in Java, Spring Boot, and REST APIs, focusing on efficient and scalable backend development."
          icon={<AiFillCode/>}
        />
         <Card
            title="Web Development"
            des="Proficient in developing dynamic and responsive websites, with a focus on functionality and user engagement."
            icon={<FaGlobe/>}
          />
         <Card
            title="System Architecture"
            des="Designing robust system architectures, developing comprehensive backend solutions, and ensuring secure access control."
            icon={<AiFillSetting/>}
          />
         <Card
          title="Project Management"
          des="Experienced in leading projects,timely delivery of high-quality software solutions."
          icon={<FaProjectDiagram/>}
        />
        <Card
          title="IoT Development"
          des="Expertise in developing IoT solutions, including designing circuits and implementing GPS-based movement code."
          icon={<FaMicrochip/>}
        />
        <Card
          title="Graphics Design (UI/UX)"
          des="Combining creativity and technical skills to design intuitive user interfaces and enhance user experience."
          icon={<SiAntdesign/>}
        />
      </div>
    </section>
  );
}

export default Features