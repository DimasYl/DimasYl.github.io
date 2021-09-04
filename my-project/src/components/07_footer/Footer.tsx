import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import {FooterIcon} from './footerIcon/FooterIcon'
let style = require("./Footer.module.scss");

export const Footer = () => {
  return (
    <div className={style.footerBlock}>
      <div className={style.block}>
        <h2>
         Фамилия Имя Отчество
        </h2>
        <div className={style.border}>
          <FooterIcon icon={faGithub}/>
          <FooterIcon icon={faLinkedin}/>
          <FooterIcon icon={faTelegram}/>
        </div>
        <span><b>©2021 Все права защищены</b></span>
      </div>
    </div>
  );
};
