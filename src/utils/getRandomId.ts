export const getRandomId = (prefix = "") => {
  return prefix + (Math.random() * 100).toFixed(2);
};
