export const adjacencyListToGraph = <T>(
  list: T[][],
  type: 'unidirectional' | 'bidirectional'
): Map<T, Set<T>> => {
  const map = new Map<T, Set<T>>();

  for (let i = 0; i < list.length; i++) {
    const [from, to] = list[i];

    if (!map.has(from)) {
      map.set(from, new Set());
    }
    map.get(from)?.add(to);

    if (type === 'bidirectional') {
      if (!map.has(to)) {
        map.set(to, new Set());
      }
      map.get(to)?.add(from);
    }
  }

  return map;
};

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest;

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
}
