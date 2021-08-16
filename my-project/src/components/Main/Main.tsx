import React from "react";
import style from './Block1.module.css'

export const Block1 = () => {
    return (
        <div style={{background:"chocolate"}}>

            <div className={style.container}>
            <div className={style.block}>
                <div className={style.myName}>
                   <b > Привет! Меня зовут Дмитрий Ильюшин.
                    Я front-end разработчик.
                   </b>
                </div>
                <div className={style.photo} >
                </div>
            </div>
        </div>
        </div>
    )
}