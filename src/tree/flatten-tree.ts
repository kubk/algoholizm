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

interface Tree {
  [key: string]: any;
}

interface FlatMap {
  [key: string]: any;
}

const isAssocArray = (value: any): boolean => {
  return Object.prototype.toString.call(value) === "[object Object]";
};

const showPaths = (tree: Tree, path: string[], map: FlatMap) => {
  if (!isAssocArray(tree)) {
    map[path.join("/")] = tree;
    return;
  }

  for (const nodeName in tree) {
    showPaths(tree[nodeName], path.concat(nodeName), map);
  }
};

export const flattenTree = (tree: Tree): FlatMap => {
  const map = {};
  showPaths(tree, [], map);
  return map;
};
