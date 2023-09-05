const getItem = (key, label, icon, children, type, link) => {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
};

export default getItem;
