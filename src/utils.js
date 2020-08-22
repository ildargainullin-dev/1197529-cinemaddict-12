export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
export const getRandomElement = (array) => {
  return array[getRandomInteger(0, array.length - 1)];
};
export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-GB`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`
  });
};
export const changeDateFormat = (date) => {
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};
