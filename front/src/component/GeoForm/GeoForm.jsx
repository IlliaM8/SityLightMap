import modalState from "../../store/modalState";
import s from "./GeoForm.module.css";
function GeoForm(props) {
  const {
    getInformation,
    handleInput,
    value,
    ready,
    status,
    renderSuggestions,
    hours,
    setTime,
    minutes,
    validForm,
  } = props;
  return (
    <form className={s.form} onSubmit={(e) => getInformation(e)} action="#">
      <label>Адресса</label>
      <input
        type="text"
        className={s.input}
        value={value}
        onChange={(e) => handleInput(e)}
        disabled={!ready}
        placeholder="Введіть адресу"
      />

      {status === "OK" && (
        <ul className={s.suggestion}>{renderSuggestions()}</ul>
      )}
      <label>Час відключення</label>
      <div className={s.timeBlock}>
        <div>
          <input
            type="number"
            value={hours}
            onChange={(e) => setTime(e.target)}
            className={s.timeInput}
            name="hour"
            id="hours"
          />
          <label htmlFor="hours">Година</label>
        </div>
        <div>
          <input
            type="number"
            value={minutes}
            onChange={(e) => setTime(e.target)}
            name="minutes"
            className={s.timeInput}
            id="minutes"
          />
          <label htmlFor="minutes">Хвилина</label>
        </div>
      </div>
      <input
        disabled={validForm ? false : true}
        className={s.submitButton}
        onClick={() => modalState.toggleModal()}
        type="submit"
      />
    </form>
  );
}

export default GeoForm;
