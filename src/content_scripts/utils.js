export function makeSureItIsJson(data) {
  if (data.length === 0) {
      return data;
  }
  if (data[0] === "{" && data[data.length - 1] !== "}") {
      data += "}";
  } else if (data[0] === "[" && data[data.length - 1] !== "]") {
      data += "]";
  }
  return data;
}

export function formatJSON(data) {
  return JSON.stringify(data, null, 2);
}
