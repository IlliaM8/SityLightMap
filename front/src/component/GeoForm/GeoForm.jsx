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
    hour,
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
            value={hour.value}
            onChange={(e) => hour.onChange(e)}
            className={s.timeInput}
            name="hour"
            id="hours"
            maxLength="2"
          />
          <label htmlFor="hours">Година</label>
        </div>
        <div>
          <input
            type="number"
            value={minutes.value}
            onChange={(e) => minutes.onChange(e)}
            name="minutes"
            className={s.timeInput}
            id="minutes"
            maxLength={2}
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
