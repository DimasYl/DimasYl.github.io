import React from "react";
import {ReactSkills} from "./ReactSkills";
import style from './Block2.module.css'


export const Block2 = () => {
    return (
        <div style={{background: 'deepskyblue'}}>
        <div className={style.container}>
            <div className={style.block}>
                <div className={style.mySkills} >My skills</div>
                <div className={style.allSkills}>
                    <ReactSkills/>
                    <ReactSkills/>
                    <ReactSkills/>
                </div>
            </div>
        </div>
        </div>
    )
}

