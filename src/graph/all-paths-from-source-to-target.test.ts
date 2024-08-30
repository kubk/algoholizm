import { expect, test } from 'vitest';
import { allPathsSourceTarget } from './all-paths-from-source-to-target';

test('all paths from source to target', () => {
  expect(allPathsSourceTarget([[1, 2], [3], [3], []])).toMatchInlineSnapshot(`
    [
      [
        0,
        2,
        3,
      ],
      [
        0,
        1,
        3,
      ],
    ]
  `);

  expect(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])).toMatchInlineSnapshot(`
    [
      [
        0,
        1,
        4,
      ],
      [
        0,
        1,
        2,
        3,
        4,
      ],
      [
        0,
        1,
        3,
        4,
      ],
      [
        0,
        3,
        4,
      ],
      [
        0,
        4,
      ],
    ]
  `);
});
