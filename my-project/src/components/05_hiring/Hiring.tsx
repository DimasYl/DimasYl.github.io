let style = require("./Hiring.module.scss");


export const Hiring = () => {
  return (
    <div className={style.hiringBlock} id={'contacts'}>
      <div className={style.block}>
        <h2>
            Considering options for remote work
        </h2>
          <a target={'_blank'} rel={'noreferrer'} href={'https://hh.ru/resume/08993460ff090becd60039ed1f6936546d685a'}><button className={style.button}>Hire me</button></a>
      </div>
    </div>
  );
};
