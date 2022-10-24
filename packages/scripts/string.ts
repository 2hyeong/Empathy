export const replaceAt = (str: string, index: number, ch: string) => {
  return str.replace(/./g, (c, i) => (i === index ? ch : c));
};
