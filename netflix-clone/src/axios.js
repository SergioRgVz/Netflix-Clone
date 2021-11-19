import axios from "axios";

//base url to make request to the movie database, when i use instance.get() it appends the url i send to the baseurl
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
