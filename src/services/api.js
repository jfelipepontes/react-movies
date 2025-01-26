import axios from 'axios';

// BASE_URL: https://api.themoviedb.org/3/
// API_URL: https://api.themoviedb.org/3/movie/now_playing?api_key=0ad6b8edc921be571526e448398c3ef5

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;