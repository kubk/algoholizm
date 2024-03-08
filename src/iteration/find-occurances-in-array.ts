export const findOccurrencesInArray = (arr: number[]): number => {
  const memory: Record<string, true> = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (memory[value]) {
      delete memory[value];
      continue;
    }
    memory[value] = true;
  }
  return +Object.keys(memory)[0];
};
