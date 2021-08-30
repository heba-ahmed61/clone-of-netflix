const API_KEY = "2c659476088254199303a6aa7b75d605";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`  ,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
// https://api.themoviedb.org/3/movie/popular?api_key=2c659476088254199303a6aa7b75d605&language=en-US&page=1
// /discover/tv?api_key=${API_KEY}&with_networks=213
// 
//https://api.themoviedb.org/3/movie/upcoming?api_key=2c659476088254199303a6aa7b75d605&language=en-US&page=1

////api.themoviedb.org/3/discover/tv?api_key=###&with_networks=213 
//https://api.themoviedb.org/3/discover/movie?api_key=2c659476088254199303a6aa7b75d605&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

// 
//https://api.themoviedb.org/3/discover/tv?api_key=2c659476088254199303a6aa7b75d605&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate