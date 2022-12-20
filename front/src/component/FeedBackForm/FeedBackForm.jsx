import { useState } from "react";
import { postForm } from "../../service";
import modalState from "../../store/modalState";
import TextareaAutosize from "react-textarea-autosize";

import s from "./FeedBackForm.module.css";
import { useEffect } from "react";

const FeedBackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);

  const [nameError, setNameError] = useState(`Введіть им'я`);
  const [emailError, setEmailError] = useState("Введіть пошту");
  const [textError, setTextError] = useState("Введіть текст");

  const [sent, setSent] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || emailError || textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emailError, textError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = new RegExp(
      // eslint-disable-next-line no-control-regex
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некоректно заповнена пошта");
      setEmailDirty(true);
    } else {
      setEmailError("");
      setEmailDirty(false);
    }
  };

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setNameError(`Введіть им'я`);
      setNameDirty(true);
    } else {
      setNameError("");
      setNameDirty(false);
    }
  };

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value === "") {
      setTextError(`Введіть текст`);
      setTextDirty(true);
    } else {
      setTextError("");
      setTextDirty(false);
    }
  };

  const onBlur = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case "name":
        nameHandler(e);
        break;
      case "email":
        emailHandler(e);
        break;
      case "text":
        textHandler(e);
        break;
    }
  };
  const formHandler = (e, name, email, text) => {
    e.preventDefault();
    postForm(name, email, text);
    setName("");
    setEmail("");
    setText("");
    setSent(true);
    setFormValid(false);
  };
  useEffect(() => {
    setSent(false);
  }, [modalState.formModal]);
  return (
    <form disabled action="#" className={s.form}>
      {nameDirty && <div style={{ color: "red" }}>{nameError}</div>}
      {!sent && (
        <div className={s.form__group}>
          <label className={s.label} htmlFor="name__input">
            Ім'я:
          </label>
          <input
            name="name"
            id="name__input"
            className={nameDirty ? s.form__input__error : s.form__input}
            type="text"
            value={name}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => nameHandler(e)}
          />
        </div>
      )}
      {emailDirty && <div style={{ color: "red" }}>{emailError}</div>}
      {!sent && (
        <div className={s.form__group}>
          <label className={s.label} htmlFor="email__input">
            Пошта:
          </label>
          <input
            name="email"
            id="email__input"
            className={emailDirty ? s.form__input__error : s.form__input}
            type="email"
            value={email}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => emailHandler(e)}
          />
        </div>
      )}
      {textDirty && <div style={{ color: "red" }}>{textError}</div>}
      {!sent && (
        <div className={s.form__group}>
          <label className={s.label} htmlFor="text__input">
            Текст:
          </label>
          <TextareaAutosize
            id="text__input"
            className={textDirty ? s.form__input__error : s.form__input}
            name="text"
            value={text}
            onBlur={(e) => onBlur(e)}
            onChange={(e) => textHandler(e)}
          />
        </div>
      )}
      {sent && (
        <div style={{ textAlign: "center" }}>Повідомлення надіслано</div>
      )}
      {!sent && (
        <button
          disabled={!formValid}
          className={s.form__submit}
          onClick={(e) => formHandler(e, name, email, text)}
        >
          Надіслати
        </button>
      )}
    </form>
  );
};

export default FeedBackForm;
