export const getItemFromStorage = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  return false;
};

export const setItemToStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
