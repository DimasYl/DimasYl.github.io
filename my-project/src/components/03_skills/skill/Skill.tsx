import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import style from "./Skill.module.scss";

type SkillPropsType = {
  title: string;
  description: string;
  background:string
  icon?: IconProp;
};

export const Skill: React.FC<SkillPropsType> = ({
  icon,
  title,
  description,
  background
}) => {
  return (
    <div className={style.skill}>
      {icon ?  <FontAwesomeIcon style={{color:background}} icon={icon} className={style.icon} />:<div style={{background:background}} className={style.myIcon}>TS</div>}
      <h3>{title}</h3>
      <span>{description}</span>
    </div>
  );
};
