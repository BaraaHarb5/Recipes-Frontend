import axios from "axios";

const API_BASE = "http://localhost:8080/api/recipes"; // Spring Boot backend

export const searchRecipes = async (query) => {
  const response = await axios.get(`${API_BASE}/search`, {
    params: { query }
  });
  console.log(response.data);
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await axios.get(`${API_BASE}/${id}`);
  return response.data;
};

export const getCaloriesExcluding = async (id, excludedIngredients) => {
  const response = await axios.post(`${API_BASE}/${id}/exclude`, {
    excludedIngredients
  });
  return response.data;
};
