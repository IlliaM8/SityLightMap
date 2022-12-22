import s from "./Button.module.css";
function Button({ children, top, right }) {
  return (
    <button style={{ top: top, right: right }} className={s.button}>
      {children}
    </button>
  );
}

export default Button;
