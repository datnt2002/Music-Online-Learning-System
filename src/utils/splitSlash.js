const splitSlash = (string) => {
  return string.split('/').filter((item) => {
    return item;
  });
};

export default splitSlash;
