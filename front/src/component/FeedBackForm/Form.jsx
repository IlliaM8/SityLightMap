import s from "./FeedBackForm.module.css";
import TextareaAutosize from "react-textarea-autosize";
import { useFormHandl } from "./useFormHandl";

function Form({ name, email, text, handleForm }) {
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
          onBlur={(e) => name.onBlur()}
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
          onBlur={(e) => email.onBlur()}
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
          onBlur={(e) => text.onBlur()}
          onChange={(e) => text.onChange(e)}
        />
      </div>

      <button
        disabled={!email.inputValid || !name.inputValid || !text.inputValid}
        className={s.form__submit}
        onClick={(e) => handleForm(e, name, email, text)}
      >
        Надіслати
      </button>
    </form>
  );
}

export default Form;
