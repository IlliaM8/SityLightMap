export const lengthHandle = (value) => {
  if (value.length > 2) {
    const newValue = value.slice(0, 2);
    return newValue;
  } else return value;
};
