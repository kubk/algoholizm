const max = (array: number[]) => {
  if (array.length) {
    return Math.max(...array)
  }
  return 0
}

export const longestIncreasingSubsequence = (arr: number[]) => {
  const lis = new Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && lis[j] + 1 > lis[i]) {
        lis[i] = 1 + lis[j]
      }
    }
  }

  return max(lis);
}
