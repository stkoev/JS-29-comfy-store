import { allProductsUrl } from "./utils.js";

const fetchProducts = async () => {
  try {
    const response = await fetch(allProductsUrl);
    return response ? response.json() : response;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchProducts;
