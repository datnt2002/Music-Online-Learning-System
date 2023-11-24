//capitalize the first and remove the hyphens
const capitalize = (string) => {
  return string
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default capitalize;
