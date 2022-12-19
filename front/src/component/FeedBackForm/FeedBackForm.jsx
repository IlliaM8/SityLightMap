import { useState } from "react";
import { postForm } from "../../service";
import s from "./FeedBackForm.module.css";
function FeedBackForm() {
  function post(e, name, email, text) {
    e.preventDefault();
    postForm(name, email, text);
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [valid, setValid] = useState(false);
  return (
    <form action="#" className={s.form}>
      <div className={s.form__group}>
        <label className={s.label} htmlFor="name__input">
          Ім'я:
        </label>
        <input
          name="name"
          id="name__input"
          className={s.form__input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={s.form__group}>
        <label className={s.label} htmlFor="email__input">
          Пошта:
        </label>
        <input
          name="email"
          id="email__input"
          className={s.form__input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={s.form__group}>
        <label className={s.label} htmlFor="text__input">
          Текст:
        </label>
        <textarea
          id="text__input"
          className={s.form__input}
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <button
        // disabled={valid ? false : true}
        className={s.form__submit}
        onClick={(e) => post(e, name, email, text)}
      >
        Надіслати
      </button>
    </form>
  );
}

export default FeedBackForm;
