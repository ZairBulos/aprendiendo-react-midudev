import React from "react";
import NoMovies from "./NoMovies";
import ListMovies from "./ListMovies";

function Movies({ movies }) {
    const hasMovies = movies?.length > 0;

    return(
        hasMovies ? <ListMovies movies={movies} /> : <NoMovies />
    );
}

export default Movies;