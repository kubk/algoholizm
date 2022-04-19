export const range = (from: number, to: number) => {
  return Array(to)
    .fill(null)
    .map((_, index) => index + from);
};
