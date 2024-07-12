import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech in Computer Science & Engineering"
            subTitle="Ahmedabad University (2020 - 2024)"
            result=""
            des="Pursuing a Bachelor of Technology in Computer Science & Engineering, focusing on software development, data structures, algorithms, and artificial intelligence. This program emphasizes practical skills through hands-on projects, internships, and collaboration with industry professionals, preparing graduates for diverse roles in the technology sector."

          />
          <ResumeCard
            title="11 & 12 Science"
            subTitle="Sheth CN Vidhya vihar (2018 - 2020)"
            result="75%"
            des="Completed higher secondary education with a focus on science subjects, achieving a commendable score of 75%. This foundation in science paved the way for further studies in engineering and technology."
          />
          <ResumeCard
            title="10 Standard"
            subTitle="Shakti Vidhyalaya (2017 - 2018)"
            result="85%"
            des="Completed secondary education with an impressive score of 85%, demonstrating strong academic performance and laying the groundwork for future educational pursuits."
          />
        </div>
      </div>
      {/* part Two */}

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
            des="Developing and maintaining software solutions, collaborating with cross-functional teams to enhance product functionality, and ensuring high-quality code delivery. Involved in designing and implementing new features, debugging and resolving issues, and optimizing applications for performance and scalability."
          />
          <ResumeCard
            title="Software Developer"  
            subTitle="ConceptServe Technologies - (Aug 2023 - Dec 2023)"
            result="Ahmedabad, Gujarat, India"
            des="Contributed to the development of web applications by implementing new features and improving existing functionalities."
          />
          <ResumeCard
            title="Software Developer Intern"
           subTitle="ConceptServe Technologies - (May 2023 - July 2023)"
            result="Ahmedabad, Gujarat, India"
            des="Assisted in the development of software projects by writing clean and efficient code."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
