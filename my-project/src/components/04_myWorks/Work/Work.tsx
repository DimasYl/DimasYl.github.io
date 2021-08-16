import React from "react";
let style = require("./Work.module.scss");

type WorkPropsType = {
  title: string;
  description: string;
};

const Work: React.FC<WorkPropsType> = (props) => {
  return (
    <div className={style.works}>
      <div className={style.project}>
          <a><button>Смотреть</button></a>
      </div>
      <div className={style.info}>
        <div>{props.title}</div>
        <div>{props.description}</div>
      </div>
    </div>
  );
};

export default Work;
