import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                <Skill title={'HTML'} description={'description 123231231 SDASD'}/>
                <Skill title={'CSS'} description={'description  232 21323'}/>
                <Skill title={'JS'} description={'description AADdfs'}/>
                <Skill title={'React'} description={'description  123123'}/>

                </div>
            </div>
        </div>
    )
}

