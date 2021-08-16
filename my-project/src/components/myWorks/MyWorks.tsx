import React from 'react'
import style from './MyWorks.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import Work from './Work/Work'


export const MyWorks = () => {
    return <div className={style.myWorksBlock}>
        <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
            <h2 className={style.title}>My Works</h2>
            <div className={style.block}>
           <Work title={'Social Network'} description={'sdfdddddd'}/>
           <Work title={'TodoList'} description={'sdfsad'}/>
           <Work title={'Zadachki'} description={'sdfsad'}/>
        
        </div>
        </div>
    </div>
}


