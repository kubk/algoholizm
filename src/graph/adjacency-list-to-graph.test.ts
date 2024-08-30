import { expect, test } from 'vitest';
import { adjacencyListToGraph } from './adjacency-list-to-graph';

test('adjacency list to graph', () => {
  expect(
    adjacencyListToGraph(
      [
        [1, 2],
        [1, 3],
        [2, 4],
      ],
      'unidirectional'
    )
  ).toMatchInlineSnapshot(`
    Map {
      1 => Set {
        2,
        3,
      },
      2 => Set {
        4,
      },
    }
  `);

  expect(
    adjacencyListToGraph(
      [
        [0, 1],
        [1, 2],
        [2, 0],
      ],
      'bidirectional'
    )
  ).toMatchInlineSnapshot(`
    Map {
      0 => Set {
        1,
        2,
      },
      1 => Set {
        0,
        2,
      },
      2 => Set {
        1,
        0,
      },
    }
  `);
});
