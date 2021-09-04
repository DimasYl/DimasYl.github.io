import React from 'react'
import style from './MyWorks.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import Work from './Work/Work'
import socNet from '../../assets/img/social_network.jpg' 
import todolist from '../../assets/img/todolist.png'


export const MyWorks = () => {
    const socNetImg=socNet
    const todolistImg=todolist
    return <div className={style.myWorksBlock}>
        
        <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
            <h2 className={style.title}>My Works</h2>
            <div className={style.block}>
           <Work background={socNetImg} title={'Social Network'} />
           <Work background={todolistImg} title={'TodoList'}/>
           {/* <Work title={'Zadachki'} description={'sdfsad'}/> */}
        </div>
        </div>
    </div>
}


