import { longestIncreasingSubsequence } from './longest-increasing-subsequence';

test('longest increasing subsequence', () => {
  expect(longestIncreasingSubsequence([1,2,3])).toBe(3)
  expect(longestIncreasingSubsequence([3,1,8,2,5])).toBe(3)
})
