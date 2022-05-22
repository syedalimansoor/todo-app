export default {
  get: <T>(key: string): T | null => {
    return JSON.parse(localStorage.getItem(key) as string) as T | null;
  },

  set: <T>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};
