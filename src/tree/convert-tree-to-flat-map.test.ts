import { convertTreeToFlatMap } from './convert-tree-to-flat-map';
import { describe, expect, it } from 'vitest';

describe('convertTreeToFlatMap', () => {
  it('should create flatten map from a tree', () => {
    const tree = {
      a: {
        b: {
          c: '12',
          d: 'Hello World',
        },
        e: ['1', '2', '3'],
      },
    };

    const output = {
      'a/b/c': '12',
      'a/b/d': 'Hello World',
      'a/e': ['1', '2', '3'],
    };

    // @ts-expect-error
    expect(convertTreeToFlatMap(tree)).toStrictEqual(output);
  });
});
