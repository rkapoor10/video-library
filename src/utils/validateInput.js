//  if returns true means empty input given and error should be given
const validateInput = (obj) => {
  const empty = (element) => element === "";
  return Object.values(obj).some(empty);
};

export default validateInput;
