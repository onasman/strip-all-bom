const stripAllBom = (str: string) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.replace(/\uFEFF/g, '');
};

export default stripAllBom;
