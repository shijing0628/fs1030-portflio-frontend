import React from "react";
import ImageSection from "../ImageSection/ImageSection";
import ServicesSection from "../Service/ServicesSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import Tittle from "../Tittle/Tittle";
import "./style.css";
import design1 from "../../images/design1.svg";
import code from "../../images/code.svg";
import database from "../../images/Database.svg";

export default function MySkills() {
  return (
    <div className="AboutPage">
      <ImageSection />
      <Tittle title={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Javascript"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Typescript"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"React Js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Graphql"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Mysql"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"MongoDB"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Web Design"} progress={"55%"} width={"55%"} />
        <SkillsSection skill={"UI/Ux Design"} progress={"76%"} width={"76%"} />
      </div>

      <Tittle title={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design1}
          title={"Web design"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={code}
          title={"Front-end Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <ServicesSection
          image={database}
          title={"Backend Development"}
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
      </div>
    </div>
  );
}
