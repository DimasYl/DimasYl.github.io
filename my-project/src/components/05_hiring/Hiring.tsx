let style = require("./Hiring.module.scss");

export const Hiring = () => {
  return (
    <div className={style.hiringBlock}>
      <div className={style.block}>
        <h2>
          Рассматриваю варианты удаленной работы
        </h2>
        <button className={style.button}>Нанять меня</button>
      </div>
    </div>
  );
};
