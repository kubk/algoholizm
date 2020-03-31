import { flattenMap } from './flatten-map';

describe('flattenMap', () => {
  it('should create flatten map from a tree', () => {
    const tree = {
      a: {
        b: {
          c: 12,
          d: 'Hello World'
        },
        e: [1, 2, 3]
      }
    };

    const output = {
      'a/b/c': 12,
      'a/b/d': 'Hello World',
      'a/e': [1, 2, 3]
    };

    expect(flattenMap(tree)).toStrictEqual(output);
  });
});
