export type NodeId = string | number | null;

export type Flat<T extends NodeId> = Array<{
  id: T;
  name: string;
  parentId: T;
}>;

export type Tree<T extends NodeId> = {
  id: T;
  name: string;
  children: Array<Tree<T>>;
};

export const convertAdjacencyListToTree = <T extends NodeId>(
  startFromId: T,
  flatList: Flat<T>
): Array<Tree<T>> => {
  return flatList
    .filter((node) => node.parentId === startFromId)
    .map((rootNode) => ({
      id: rootNode.id,
      name: rootNode.name,
      children: convertAdjacencyListToTree(rootNode.id, flatList),
    }));
};
