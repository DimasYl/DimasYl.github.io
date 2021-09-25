import React from 'react'
import style from './MyWorks.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import Work from './Work/Work'
import socNet from '../../assets/img/social_network.jpg' 
import todolist from '../../assets/img/todolist.png'
import counter from '../../assets/img/counter2.png'
import posts from '../../assets/img/posts.png'


export const MyWorks = () => {
    const socNetImg=socNet
    const todolistImg=todolist
    return <div className={style.myWorksBlock}>
        
        <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
            <h2 className={style.title}>My Works</h2>
            <div className={style.block}>
           <Work background={socNetImg} title={'Social Network'} href={'https://dimasyl.github.io/social_network/'}/>
           <Work background={todolistImg} title={'TodoList'} href={'https://dimasyl.github.io/todolist/'}/>
           <Work background={counter} title={'Counter'} href={'https://dimasyl.github.io/counter/'}/>
           <Work background={posts} title={'Posts'} href={'https://dimasyl.github.io/react/'}/>
           {/* <Work title={'Zadachki'} description={'sdfsad'}/> */}
        </div>
        </div>
    </div>
}


