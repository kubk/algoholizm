import { fibonacci } from '../recursion/fibonacci';

test('fibonacci', () => {
  const expectedSequence = [1, 1, 2, 3, 5, 8, 13];

  for (let i = 1; i < expectedSequence.length; i++) {
    expect(fibonacci(i)).toBe(expectedSequence[i - 1]);
  }
})
