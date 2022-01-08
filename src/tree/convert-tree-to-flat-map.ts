/**
 Write a function that takes a tree of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

 The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and nulls — they should be left as is in the result. The only property types will be:

 true
 false
 Numbers
 Strings
 null
 Arrays
 Functions
 Nested Maps
 Keys can be any string of characters, excluding the '/' character.
*/

type Tree<T> = {
  [key: string]: T | Tree<T>;
};

type FlatMap<T> = {
  [key: string]: T;
};

const isTree = <T>(value: Tree<T> | T): value is Tree<T> => {
  return Object.prototype.toString.call(value) === '[object Object]';
};

const showPaths = <T>(tree: Tree<T> | T, path: string[], map: FlatMap<T>) => {
  if (!isTree(tree)) {
    map[path.join('/')] = tree;
    return;
  }

  Object.entries(tree).forEach(([key, value]) => {
    showPaths(value, path.concat(key), map);
  });
};

export const convertTreeToFlatMap = <T>(tree: Tree<T> | T): FlatMap<T> => {
  const map = {};
  showPaths(tree, [], map);
  return map;
};
