import React from "react";
import style from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import ReactTypingEffect from 'react-typing-effect';
import userPhoto from './../../assets/img/userPhoto.jpg'


export const Main = () => {
   
    return (
        <div className={style.mainBlock} id='home'>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
            
                <div className={style.text}>
              
                    <span>Hi There</span>
                    <h1> <ReactTypingEffect
        text={["I am Ilyushin Dmitry"] } speed={30} eraseSpeed={50}
      /></h1>
                    <p>Frontend Developer</p>
                </div>
                
                <div>
                   <img alt='userPhoto' src={userPhoto} className={style.photo} />

                </div>
            </div>
        </div>

    )
}