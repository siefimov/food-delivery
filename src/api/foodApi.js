import axios from 'axios';

const URL = 'http://localhost:3000';

export const endpoints = {
  food: '/food',
  brands: '/brands',
};

export const getData = async (endpoint) => {
  try {
    const response = await axios.get(URL + endpoint);

    console.log(response.data);
    
    return response.data;
  } catch (error) {
    return error;
  }
};

