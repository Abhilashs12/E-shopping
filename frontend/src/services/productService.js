import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(`${API_URL}/category/${category}`);

  return response.data;
};

export const searchProducts = async (keyword) => {
  const response = await axios.get(
    `${API_URL}/search/product?keyword=${keyword}`,
  );

  return response.data;
};
