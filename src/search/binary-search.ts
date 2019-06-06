export const binarySearch = (
  haystack: number[],
  needle: number,
  from = 0,
  optionalTo?: number
): number => {
  const to = optionalTo || haystack.length;
  const indexToCheck = Math.floor((from + to) / 2);
  if (haystack[indexToCheck] === needle) {
    return indexToCheck;
  }
  if (Math.abs(from - to) === 1) {
    return -1;
  }
  if (needle > haystack[indexToCheck]) {
    return binarySearch(haystack, needle, indexToCheck, to);
  }
  return binarySearch(haystack, needle, from, indexToCheck);
};
