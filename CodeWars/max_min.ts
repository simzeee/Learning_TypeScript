export const min = (list) => Math.min(...list);
export const max = (list) => Math.max(...list);

export const min2 = ($: number[]): number => $.sort((a, b) => a - b)[0];
export const max2 = ($: number[]): number => $.sort((a, b) => b - a)[0];

export const min3 = (list: number[]): number => {
  return list.sort((n1, n2) => n1 - n2)[0];
};

export const max3 = (list: number[]): number => {
  return list.sort((n1, n2) => n1 - n2)[list.length - 1];
};
