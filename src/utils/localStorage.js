export const getItemFromStorage = key => JSON.parse(localStorage.getItem(key));

export const setItemToStorage = (key, value) =>
  JSON.stringify(localStorage.setItem(key, JSON.stringify(value)));
