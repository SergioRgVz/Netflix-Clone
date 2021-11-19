const API_KEY = "7f3aafa9c9a5be31bf0673fb30efd31f";

const requests = {
    fetchTrending: '/trending/all/wekk?api_key=${API_KEY}&language=es-EU',
    fetchNetflixOriginals: '/discover/tv?api_ley=${API_KEY}$with_networks=213',
    fetchTopRated: '/movie/top_rated?api_key=${API_KEY}&language=es-EU',
    fetchActionMovies: '/discover/movie?api?api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies: '/discover/movie?api?api_key=${API_KEY}&with_genres=35',
    fetchHorrorMovies: '/discover/movie?api?api_key=${API_KEY}&with_genres=27',
    fetchRomanceMovies: '/discover/movie?api?api_key=${API_KEY}&with_genres=10749',
    fetchDocumentaries: '/discover/movie?api?api_key=${API_KEY}&with_genres=99',
}

export default requests;
