import React from "react"

function MovieScreen(props) {
    const movieDisplay = movieList.map((movie, index) => {
        return <h2>{movie.orginal_title}</h2>
    })

    return (
        <div className="page">
            <h1>Brooklyn's Movie Theatre</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}

export default MovieScreen