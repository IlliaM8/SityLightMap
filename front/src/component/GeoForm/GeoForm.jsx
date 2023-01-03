import modalState from "../../store/modalState";
import ErrorMessage from "../UI/ErrorMessage/ErrorMessage";
import s from "./GeoForm.module.css";
function GeoForm(props) {
  const {
    handleInformation,
    handleInput,
    value,
    ready,
    status,
    renderSuggestions,
    hour,
    minutes,
  } = props;
  const submit = (e) => {
    e.preventDefault();
    handleInformation(value);
  };
  return (
    <form className={s.form} onSubmit={submit}>
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

      <ErrorMessage
        errorCheck1={hour.isDirty}
        errorCheck2={hour.isEmpty}
        errorText={minutes.IsError}
      />
      <ErrorMessage
        errorCheck1={minutes.isDirty}
        errorCheck2={minutes.isEmpty}
        errorText={minutes.IsError}
      />
      <div className={s.timeBlock}>
        <div>
          <input
            type="number"
            value={hour.value}
            onChange={(e) => hour.onChange(e)}
            onBlur={() => hour.onBlur()}
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
            onBlur={() => minutes.onBlur()}
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
        disabled={!hour.inputValid || !minutes.inputValid}
        className={s.submitButton}
        onClick={() => modalState.toggleModal()}
        type="submit"
      />
    </form>
  );
}

export default GeoForm;
