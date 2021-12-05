export const setBit = (number: number, bit: number) => {
  return number | (1 << bit);
};

export const clearBit = (number: number, bit: number) => {
  return number & ~(1 << bit);
};

export const toggleBit = (number: number, bit: number) => {
  return number ^ (1 << bit);
};

export const countBits = (number: number) => {
  let count = 0;
  while (number) {
    if (number & 1) {
      count++;
    }
    number >>= 1;
  }
  return count;
};

export const isEven = (number: number) => {
  return (number & 1) === 0;
}

export const isOdd = (number: number) => {
  return (number & 1) === 1;
}
