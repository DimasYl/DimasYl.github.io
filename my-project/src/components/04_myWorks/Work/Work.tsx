import React from "react";
let style = require("./Work.module.scss");

type WorkPropsType = {
  title: string;
  background:string
};

const Work: React.FC<WorkPropsType> = (props) => {
  let backgroundImage = {backgroundImage:`url(${props.background})`,backgroundSize:'cover',backgroundPosition:'center'}
  return (
    <div className={style.works} id={'myWorks'}>
      <div className={style.project} style={backgroundImage}>
          <button>Смотреть</button>
      </div>
      <div className={style.info}>
        <div>{props.title}</div>
      </div>
    </div>
  );
};

export default Work;
