import React from "react"
import MovieCard from "./MovieCard"

function WatchList({list, removeMovie}) {
    const movieDisplay = list.map((movie, index) => {
        return (
            <MovieCard 
                key={index}
                movie={movie}
                list={list}
                removeMovie={removeMovie}
            />
        )
    })

    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default WatchList