import modalState from "../../store/modalState";
import TextareaAutosize from "react-textarea-autosize";

import s from "./FeedBackForm.module.css";
import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { FormHandler } from "./FormHadler";

const FeedBackForm = () => {
  const name = useInput("", { isEmpty: true });
  const email = useInput("", { isEmpty: true, isEmail: true });
  const text = useInput("", { isEmpty: true });

  useEffect(() => {}, [modalState.formModal]);

  return (
    <form action="#" className={s.form}>
      {name.isDirty && name.isEmpty && (
        <div style={{ color: "red" }}>{name.IsError}</div>
      )}

      <div className={s.form__group}>
        <label className={s.label} htmlFor="name__input">
          Ім'я:
        </label>
        <input
          name="name"
          id="name__input"
          className={name.isDirty ? s.form__input__error : s.form__input}
          type="text"
          value={name.value}
          onBlur={(e) => name.onBlur(e)}
          onChange={(e) => name.onChange(e)}
        />
      </div>

      {email.isDirty && email.emailError && (
        <div style={{ color: "red" }}>{email.IsError}</div>
      )}

      <div className={s.form__group}>
        <label className={s.label} htmlFor="email__input">
          Пошта:
        </label>
        <input
          name="email"
          id="email__input"
          className={email.isDirty ? s.form__input__error : s.form__input}
          type="email"
          value={email.value}
          onBlur={(e) => email.onBlur(e)}
          onChange={(e) => email.onChange(e)}
        />
      </div>

      {text.isDirty && text.isEmpty && (
        <div style={{ color: "red" }}>{text.IsError}</div>
      )}

      <div className={s.form__group}>
        <label className={s.label} htmlFor="text__input">
          Текст:
        </label>
        <TextareaAutosize
          id="text__input"
          className={text.isDirty ? s.form__input__error : s.form__input}
          name="text"
          value={text.value}
          onBlur={(e) => text.onBlur(e)}
          onChange={(e) => text.onChange(e)}
        />
      </div>

      {/* {sent && (
        <div style={{ textAlign: "center" }}>Повідомлення надіслано</div>
      )} */}

      <button
        disabled={!email.inputValid || !name.inputValid || !text.inputValid}
        className={s.form__submit}
        onClick={(e) => FormHandler(e, name.value, email.value, text.value)}
      >
        Надіслати
      </button>
    </form>
  );
};

export default FeedBackForm;
