import React from 'react'
import './homeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {
    return (
        <div className='homeScreen'>
            {/* Nav */}
            <Nav />

            {/* Banner */}
            <Banner />

            {/* Row */}
            <Row
                title='Netflix Originals'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow='true'
            />
            <Row
                title='Popular Movies'
                fetchUrl={requests.fetchTopRated}
                isLargeRow='false'
            />
            <Row
                title='Trending'
                fetchUrl={requests.fetchTrending}
                isLargeRow='false'
            />
            <Row
                title='Action Movies'
                fetchUrl={requests.fetchActionMovies}
                isLargeRow='false'
            />
            <Row
                title='Comedy Movies'
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow='false'
            />
            <Row
                title='Horror Movies'
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow='false'
            />
            <Row
                title='Documentries'
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow='false'
            />
        </div>
    )
}

export default HomeScreen