import { solveGraph } from './solve-graph';

describe('Simple graph with 1 arc', () => {
  const graph = [{ start: 'a', end: 'b' }];
  it('Should reach b', () => {
    expect(solveGraph('a', 'b', graph)).toBe(true);
  });
  it('Should never reach c', () => {
    expect(solveGraph('a', 'c', graph)).toBe(false);
  });
  it('Should reach start state', () => {
    expect(solveGraph('a', 'a', graph)).toBe(true);
  });
});

describe('Complex graph with loops and intermediary nodes', () => {
  const graph = [
    { start: 'a', end: 'b' },
    { start: 'b', end: 'c' },
    { start: 'c', end: 'a' },
    { start: 'c', end: 'd' },
    { start: 'e', end: 'a' },
  ];
  it('Should reach d', () => {
    expect(solveGraph('a', 'd', graph)).toBe(true);
  });
  it('Should never reach nodes with no graph leading to it', () => {
    expect(solveGraph('a', 'e', graph)).toBe(false);
  });
  it('Should reach all nodes in a loop', () => {
    expect(solveGraph('a', 'a', graph)).toBe(true);
    expect(solveGraph('a', 'b', graph)).toBe(true);
    expect(solveGraph('a', 'c', graph)).toBe(true);
  });
});
