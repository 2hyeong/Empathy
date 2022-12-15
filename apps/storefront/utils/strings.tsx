export const filterAlphabet = (str: string): string => {
  return str.replace(/[^a-zA-Z]/g, "");
};
