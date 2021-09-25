import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import {FooterIcon} from './footerIcon/FooterIcon'
let style = require("./Footer.module.scss");

export const Footer = () => {
  return (
    <div className={style.footerBlock} >
      <div className={style.block}>
            <h2>Contacts</h2>
          <p>Email - dima.ilyushin.2016@mail.ru</p>
          <p>Telegram - @ven32om</p>
          <p>LinkedIn - Dmitry ilyushin</p>
          <p>GitHub - DimasYl</p>
          <h2>
              Ilyushin Dmitry Victorovich
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
