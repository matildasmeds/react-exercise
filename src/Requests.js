import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';


const Requests = {
  fetchRecipes: () => {
    return axios('/api/recipe/');
  },
  saveRecipe: (payload) => {
    return axios.post('/api/recipe/', payload);
  }
}

export default Requests;
