const API_URL = "http://localhost:5000/api/movies"; // Change this in production
export const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data.Search || []; // Return only movie results
    } catch (error) {
      console.error("Error fetching movies:", error);
      return [];
    }
  };