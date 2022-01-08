import { convertAdjacencyListToTree } from './convert-adjacency-list-to-tree';

describe('convertAdjacencyListToTree', () => {
  it('converts number ids', () => {
    const flat = [
      { id: 1, name: 'Phonedo', parentId: 0 },
      { id: 2, name: 'Phonedo - A', parentId: 1 },
      { id: 3, name: 'Phonedo - A - A', parentId: 2 },
      { id: 4, name: 'Phonedo - B', parentId: 1 },
      { id: 6, name: 'Phonedo - C', parentId: 1 },
      { id: 7, name: 'Phonedo - A - B', parentId: 2 },
    ];

    expect(convertAdjacencyListToTree(0, flat)).toMatchSnapshot();
  });

  it('converts null|string ids', () => {
    const flat = [
      { id: '1', name: 'Phonedo', parentId: null },
      { id: '2', name: 'Phonedo - A', parentId: '1' },
      { id: '3', name: 'Phonedo - A - A', parentId: '2' },
      { id: '4', name: 'Phonedo - B', parentId: '1' },
      { id: '6', name: 'Phonedo - C', parentId: '1' },
      { id: '7', name: 'Phonedo - A - B', parentId: '2' },
    ];

    expect(convertAdjacencyListToTree(null, flat)).toMatchSnapshot();
  });
});
