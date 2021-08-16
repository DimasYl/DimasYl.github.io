import React from "react";
import style from './Nav.module.scss'

export const Nav = () => {
    return <div className={style.navStyle}>
        <span><a>Home</a></span>
        <span><a>Skills</a></span>
        <span><a>Works</a></span>
        <span><a>Contacts</a></span>
    </div>
}