type Callback = (key: string, value: string | number | object) => void;

export const traverseJson = (json: object, callback: Callback) => {
  if (Array.isArray(json)) {
    json.forEach((node) => {
      traverseJson(node, callback)
    })
    return;
  }
  if (typeof json === 'object' && json !== null) {
    Object.entries(json).map(([key, value]) => {
      callback(key, value);
      traverseJson(value, callback);
    })
  }
};
