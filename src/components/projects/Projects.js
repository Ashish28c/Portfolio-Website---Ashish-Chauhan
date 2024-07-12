import React from 'react'
import Title from '../layouts/Title'
import {dbas,lites,atom, pmsAh, pmsAj,agr} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

      <ProjectsCard
          title="LITES"
          des=" Comprehensive system for case, court, and lawyer management, featuring hierarchical department structures and User Management."
          src={lites}  
        />

        <ProjectsCard
          title="ATOM"
          des=" A banking system for managing post-loan processes including inspection, interview notices,
               and tracking SMA/NPA status and Integration with CMS of Bank"
          src={atom}
        />
        <ProjectsCard
          title="PMS Ahmedabad"
          des=" A parking management system for Ahmedabad Airport with enhanced functionality, IOT and
           automated email alerts, and dynamic charts."
          src={pmsAh}
        />
        <ProjectsCard
          title="PMS Ambaji"
          des=" A parking management system for Ambaji Temple with VIP visitor management using RFID and
           real-time tracking dashboard of total people count via object recognition."
          src={pmsAj}
        />
        <ProjectsCard
          title="AgriRover"
          des=" A self-governing rover system for automating soil sampling in agriculture,
                 providing data on pH levels, NPK values, moisture content, and texture."
          src={agr}
        />
        <ProjectsCard
          title="AdaptoDB"
          des=" A database management systemthat simplifies interactions and management without handling
           underlying infrastructure complexities"
          src={dbas}
        />
      

      </div>
    </section>
  );
}

export default Projects