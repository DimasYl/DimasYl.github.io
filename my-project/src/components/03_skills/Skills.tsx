import React from "react";
import style from "./Skills.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import { Skill } from "./skill/Skill";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
  faSass,
  
} from "@fortawesome/free-brands-svg-icons";
import { faRadiation } from "@fortawesome/free-solid-svg-icons";

export const Skills = () => {
    
  return (
    <div className={style.skillsBlock}>
      <div className={`${styleContainer.container} ${style.skillsContainer}`}>
        <h2 className={style.title}>Skills</h2>
        <div className={style.skills}>
          <Skill
          background={'orangered'}
            icon={faHtml5}
            title={"HTML"}
            description={"description 123231231 SDASD"}
          />
          <Skill
           background={'blue'}
            icon={faCss3}
            title={"CSS"}
            description={"description  232 21323"}
          />
          <Skill 
          background={'orange'}
          icon={faJs} title={"JS"} description={"description AADdfs"} />
          <Skill
          background={'cyan'}
            icon={faReact}
            title={"React & Redux"}
            description={"description  123123"}
          />
         
          <Skill
          background={'violet'}
            icon={faSass}
            title={"SASS"}
            description={"description  123123"}
          />
          <Skill
          background={'dodgerblue'}
            title={"TS"}
            description={"description  123123"}
          />
        </div>
      </div>
    </div>
  );
};
