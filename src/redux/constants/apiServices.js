const APIService = {
  baseUrl: 'http://localhost:3001/',
  categoriesUrl: `http://localhost:3001/categories`,
  dishesUrl: `http://localhost:3001/dishes`,
};

export const SERVER_RESPONSE = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

export default APIService;
