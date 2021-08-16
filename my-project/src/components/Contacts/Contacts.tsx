let styleContainer = require("../../common/styles/Container.module.css");
let style = require("./Contacts.module.css");

export const Contacts = () => {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.block}`}>
        <h2>Контакты</h2>
        <form className={style.contacts}>
          <input placeholder={"First Name"} />
          <input placeholder={"Last Name"} />
          <textarea placeholder={"Desription"} />
        </form>
        <button>Отправить</button>
      </div>
    </div>
  );
};
