import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from './Axios'
import requests from './Requests';
import './banner.css'

function Banner() {
    // let data = fetch('https:api.themoviedb.org/3/movie/550?api_key=ca9cae377d55d0a34474831110a03d66')
    // console.log(data)
    const image = "https://image.tmdb.org/t/p/original/"
    const [movie, setMovie] = useState([]);

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request
        }
        fetchData()
    },[]);

    console.log(movie)
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string; 
    }
  return (
    <header 
        className='banner' 
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("${image}.${movie?.backdrop_path}")`,
            backgroundPosition: "center center"
            }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className="banner_description">{truncate (movie?.overview,150)}</h1>
        </div>
        <div className="banner_fadeBottom" />
    </header>
  )
}

export default Banner