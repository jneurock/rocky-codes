const stubLocalStorage = () => ({
  localStorage: {
    getItem: () => {},
    setItem: () => {}
  }
});

const context = typeof window !== 'undefined'
  ? window
  : stubLocalStorage();

export default {
  get: key => context.localStorage.getItem(key),
  set: (key, value) => context.localStorage.setItem(key, value)
};
