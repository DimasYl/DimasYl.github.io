import React from 'react'

let style = require("./Footer.module.scss");

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={style.block}>
        <h2>
         Фамилия Имя Отчество
        </h2>
        <div className={style.border}>
            <div className={style.square}></div>
            <div className={style.square}></div>
            <div className={style.square}></div>
            <div className={style.square}></div>
        </div>
        <span><b>©2021 Все права защищены</b></span>
      </div>
    </div>
  );
};
