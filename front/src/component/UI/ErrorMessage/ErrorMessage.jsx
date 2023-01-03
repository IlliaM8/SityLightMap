function ErrorMessage({ errorCheck1, errorCheck2, errorText }) {
  return (
    errorCheck1 &&
    errorCheck2 && <div style={{ color: "red" }}>{errorText}</div>
  );
}

export default ErrorMessage;
