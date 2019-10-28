export const linearSearch = <T>(needle: T, haystack: T[]): number | null => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }
  return null;
};
