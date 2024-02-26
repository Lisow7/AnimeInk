export const isString = (string) => {
  return typeof string === "string";
};

export const stringIsFilled = (string) => {
  return isString(string) && string.trim().length > 0;
};

export const stringAreFilled = (strings) => {
  let areFilled = true;

  for (let string of strings) {
    const filled = stringIsFilled(string);

    if (!filled) {
      areFilled = false;
    }
  }

  return areFilled;
};
