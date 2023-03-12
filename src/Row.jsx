import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './row.css'
import axios from './Axios'

function Row({ title, fetchUrl, isLargeRow }) {
    // `${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`
    // src={`${baseUrl}${movie?.backdrop_path}`} alt={movie.name}
    const [movies, setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className="row_posters">
                {movies.map(
                    (movie) =>
                        ((isLargeRow === 'true' && movie.poster_path) || (isLargeRow === 'false' && movie.backdrop_path)) &&
                        (<img
                            className={`row_poster ${(isLargeRow === 'true') && "row_posterLarge"}`}
                            key={movie.id}
                            src={`${baseUrl}${(isLargeRow === 'true') ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />)
                )}
            </div>
        </div>
    )
}

export default Row