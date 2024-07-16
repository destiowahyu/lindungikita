// src/utils/api.js

import sheltersData from '../data/shelters';

// Mock function to fetch shelters data
export const fetchShelters = () => {
  return new Promise((resolve, reject) => {
    // Simulate delay for fetching data (optional)
    setTimeout(() => {
      resolve(sheltersData); // Resolve with static shelters data for now
    }, 500); // Simulated delay of 500ms
  });
};
