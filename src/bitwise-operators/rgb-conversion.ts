type Rgb = { r: number; g: number; b: number };

export const numToRgb = (number: number): Rgb => {
  // Maximum value per channel
  const bite = 0b11111111;

  return {
    r: number >> 16,
    g: (number >> 8) & bite,
    b: number & bite,
  };
};

export const rgbToNum = (number: Rgb) => {
  return (number.r << 16) | (number.g << 8) | (number.b << 0);
};
