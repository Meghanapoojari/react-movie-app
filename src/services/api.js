const API_KEY = "8dd4332341674c078ef7b89c16f2ba9f";
const BASE_URL = "https://api.themoviedb.org/3";


export const getpopularMovies = async () => {
     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
     const data = await response.json()
     return data.results
};

export const searchMovies = async (query) => {
     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
        query)}
        `
    );
     const data = await response.json()
     return data.results
};



