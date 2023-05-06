import "./App.css";
import React, { useCallback, useState } from "react";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import debounce from "just-debounce-it";

function App() {
  const [ sort, setSort ] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search });
    }, 300)
    , [getMovies]
  );

  const handleSort = () => {
    setSort(!sort);
  }

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <form onSubmit={handleSubmit} className="form">
            <input style={{border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'}} 
              onChange={handleChange} 
              name="search" 
              placeholder="Buscar películas..."
            />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{color: "red"}}>{ error }</p>}
        </header>

        <main>
          { 
            loading ? <p>Loading...</p> :  <Movies movies={movies} /> 
          }
        </main>
      </div>
    </>
  );
}

export default App;