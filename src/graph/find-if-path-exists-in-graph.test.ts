import { expect, test } from 'vitest';
import { findIfPathExistsInGraph } from './find-if-path-exists-in-graph';

test('find if path exists in graph', () => {
  expect(
    findIfPathExistsInGraph(
      3,
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      0,
      2
    )
  ).toBeTruthy();
});
