import React from "react";
import "./form.css";
import pichoq from "../../img/pichoq.png";
import pc from "../../img/pc.png";
function Form() {
  return (
    <div className="form-parent">
      <div className="form-registration">
        <div className="registration">
          <h4>Регистрация</h4>
          <div className="flex-1">
            <button>Один игрок</button>
            <button>Команда</button>
          </div>
          <form>
            <div className="name-form">
              <div className="name-form-third  ">
                <label htmlFor="name">Имя</label>
                <input type="text" id="name" />
              </div>
              <div className="form-experience">
                <label htmlFor="experienceFrom">Опыт</label>

                <div className="form-experience-inputs">
                  <input id="experienceFrom" type="number" placeholder="От" />
                  <input type="number" placeholder="До" />
                </div>
              </div>
            </div>

            <div className="lname">
              <div className="name-form-third">
                <label htmlFor="lname">Фамилия</label>
                <input id="lname" type="text" />
              </div>
              <div className="name-form-third">
                <label htmlFor="stack">Направления</label>
                <input id="stack" type="text" />
              </div>
            </div>

            <div className="lname">
              <div className="name-form-third">
                <label htmlFor="email">Почта</label>
                <input id="email" type="email" />
              </div>
              <div className="name-form-third">
                <label htmlFor="number">Телефон</label>
                <input id="number" type="tel" />
              </div>
            </div>

            <div className="submit">
              <button type="submit" className="submit-btn">
                Отправить
              </button>
            </div>
          </form>

          <div className="gr-border"></div>
        </div>

        <img className="pichoq" src={pichoq} alt="pichoq" />
        <img className="pc" src={pc} alt="pc" />
      </div>
    </div>
  );
}

export default Form;
