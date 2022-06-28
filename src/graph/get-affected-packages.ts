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
