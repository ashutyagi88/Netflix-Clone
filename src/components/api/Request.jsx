const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_network=213&language=en-US`,
  fetchPrime: `/discover/tv?api_key=${API_KEY}&with_network=1024&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=hi-IN&region=IN&with_genres=27`,
  fetchComedyShows: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
  fetchMysteryShow: `/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=9648`,
  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,
};

export default requests;
