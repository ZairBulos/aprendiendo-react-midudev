import { API_URL, API_KEY } from "../constants/constants.js";

export const searchMovies = async ({ search }) => {
    if (search === "") return null;

    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${search}`);
        const data = await response.json();

        const movies = data.Search;

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster
        }));

    } catch (e) {
        throw new Error("Error searching movies");
    }
};