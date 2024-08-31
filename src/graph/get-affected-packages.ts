import { expect, test } from 'vitest';

export type Vertex = {
  name: string;
  dependsOn: string[];
};

export const getAffectedPackages = (name: string, flatGraph: Vertex[]): string[] => {
  const set = new Set<string>();

  flatGraph.forEach((vertex) => {
    if (vertex.dependsOn.includes(name)) {
      set.add(vertex.name);
      getAffectedPackages(vertex.name, flatGraph).forEach((nested) => {
        set.add(nested);
      });
    }
  });

  return Array.from(set);
};

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('get affected packages', () => {
    // A -> B
    //      \--> C ---\
    //      \--> D   \|/
    //           \--> E <-- F
    const a: Vertex = { name: 'A', dependsOn: ['B'] };
    const b: Vertex = { name: 'B', dependsOn: ['C', 'D'] };
    const c: Vertex = { name: 'C', dependsOn: ['E'] };
    const d: Vertex = { name: 'D', dependsOn: ['E'] };
    const e: Vertex = { name: 'E', dependsOn: [] };
    const f: Vertex = { name: 'F', dependsOn: ['E'] };

    const graph = [a, b, c, d, e, f];

    expect(getAffectedPackages('A', graph)).toStrictEqual([]);
    expect(getAffectedPackages('B', graph)).toStrictEqual(['A']);
    expect(getAffectedPackages('C', graph)).toStrictEqual(['B', 'A']);
    expect(getAffectedPackages('D', graph)).toStrictEqual(['B', 'A']);
    expect(getAffectedPackages('E', graph)).toStrictEqual(['C', 'B', 'A', 'D', 'F']);
    expect(getAffectedPackages('F', graph)).toStrictEqual([]);
  });
}
