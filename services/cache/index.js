export const cache = {
  checkItem: (key) => (sessionStorage.getItem(key) ? true : false),
  getItem: (key) => JSON.parse(sessionStorage.getItem(key)),
  setItem: (data = {}) =>
    Object.keys(data).forEach((key) =>
      sessionStorage.setItem(key, JSON.stringify(data[key]))
    ),
  removeItem: (key) => sessionStorage.removeItem(key),
  clear: () => sessionStorage.clear(),
};
