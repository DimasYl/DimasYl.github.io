import React from "react";
import style from './Header.module.css'

export const Header = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.headerStyle}>
                <h2>Header</h2>
            </div>
            <div className={style.navStyle}>
                <span><a>Главная</a></span>
                <span><a>Скиллы</a></span>
                <span><a>Работы</a></span>
                <span><a>Контакты</a></span>
            </div>
        </div>
    )
}