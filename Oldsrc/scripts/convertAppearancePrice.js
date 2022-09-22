export const convertAppearancePrice = (num) =>
  parseFloat(num)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ');
