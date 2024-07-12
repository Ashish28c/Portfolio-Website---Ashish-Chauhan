import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Software Developer"
            subTitle="SSB Digital PVT LTD - (Feb 2024 - Present)"
            result="Ahmedabad, Gujarat, India"
            des="Developing and maintaining software solutions, collaborating with cross-functional teams to enhance product functionality, and ensuring high-quality code delivery. Involved in designing and implementing new features, debugging and resolving issues, and optimizing applications for performance and scalability. Leading code reviews and aligning developers to foster a collaborative development environment."
          />
          <ResumeCard
            title="Software Developer"  
            subTitle="ConceptServe Technologies - (Aug 2023 - Dec 2023)"
            result="Ahmedabad, Gujarat, India"
            des="Contributed to the development of web applications by implementing new features and improving existing functionalities. Worked on performance optimization and security enhancements to ensure a robust and user-friendly experience. Collaborated closely with designers, product managers, and other developers to deliver high-quality software on time."
          />
          <ResumeCard
            title="Software Developer Intern"
           subTitle="ConceptServe Technologies - (May 2023 - July 2023)"
            result="Ahmedabad, Gujarat, India"
            des="Assisted in the development of software projects by writing clean and efficient code. Participated in code reviews, contributed to team meetings, and provided input on project planning and design. Gained hands-on experience in various stages of the software development lifecycle, including requirement analysis, design, implementation, testing, and deployment. Worked under the guidance of senior developers, enhancing skills in problem-solving, debugging, and software documentation."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
