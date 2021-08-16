import React from "react";
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
}

export const Skill: React.FC<SkillPropsType> = ({title, description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}> </div>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    )
}