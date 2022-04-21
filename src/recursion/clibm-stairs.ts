const createCacheable = <T extends any>() => {
  const cache = new Map<T, T>()

  return (fn: (arg: T) => T) => {
    return (n: T) => {
      if (!cache.has(n)) {
        cache.set(n, fn(n))
      }
      return cache.get(n)!
    }
  }
}

const cacheable = createCacheable<number>()

export const climbStairs = cacheable((n: number): number => {
  if (n === 1 || n === 2) {
    return n
  }

  return climbStairs(n - 1) + climbStairs(n - 2)
});
