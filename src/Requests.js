import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers['Content-Type'] = 'application/json';

const Requests = {
  fetchRecipes: (searchParams) => {
    return axios('/api/recipe/' + searchParams);
  },
  createRecipe: (payload) => {
    return axios.post('/api/recipe/', payload);
  },
  updateRecipe: (payload) => {
    const id = payload.id;
    delete payload.id;
    return axios.patch('/api/recipe/' + id + '/', payload);
  },
  fetchRecipe: (id) => {
    return axios('/api/recipe/' + id + '/');
  },
  deleteRecipe: (id) => {
    return axios.delete('/api/recipe/' + id + '/');
  }
}

export default Requests;
