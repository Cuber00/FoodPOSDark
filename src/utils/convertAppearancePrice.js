export const convertAppearancePrice = (num) => {
  if (num === 0) return 0;
  return parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
};
