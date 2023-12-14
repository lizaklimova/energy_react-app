export const capitalizeFirstLetter = name => {
  const firstLetter = name.slice(0, 1).toUpperCase();
  const restWord = name.slice(1);

  return firstLetter + restWord;
};
