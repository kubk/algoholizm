export const binaryGap = (n: number) => {
  let max = 0;
  let currentMax = 0;

  n.toString(2)
    .split('')
    .forEach((char) => {
      if (char === '0') {
        currentMax++;
      }
      if (char === '1') {
        if (currentMax > max) {
          max = currentMax;
        }
        currentMax = 0;
      }
    });

  return max;
};
