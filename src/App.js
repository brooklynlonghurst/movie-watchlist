import React, { useState, useEffect } from "react"
import './App.css';
import axios from "axios"
import Header from './components/Header'
import MovieScreen from "./components/MovieScreen";
import WatchList from "./components/WatchList";


function App() {
  const [list, setList] = useState([])
  const [movieList, setMovieList] = useState([])
  const [page, setPage] = useState(1)

  function addMovie(movie) {
    setList([...list, movie])
  }

  function removeMovie(movie) {
    const newState = list.filter((mov) => {
      return (mov !== movie)
    })
    setList(newState)
  }

  function getData() {
    axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      )
    .then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  useEffect(() => {
    getData()
  }, [page])

  return (
    <div className="App">
      <Header />
      <main>
      <MovieScreen 
        addMovie={addMovie}
        movieList={movieList}
        page={page}
        setPage={setPage}
        list={list}
        removeMovie={removeMovie}
      />
      <WatchList
      list={list}
      removeMovie={removeMovie}
      />
      </main>
    </div>
  );
}

export default App;
