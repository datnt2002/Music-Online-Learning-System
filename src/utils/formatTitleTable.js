const formatTitleTable = (str) => {
  const words = str.split(/(?=[A-Z])/);

  // Capitalize the first letter of each word and join them back together
  const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return capitalizedWords;
};

export default formatTitleTable;
