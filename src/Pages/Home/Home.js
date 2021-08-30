import React from 'react'
import Banner from '../../Components/Banner/Banner';
import Nav from '../../Components/HomeNav/HomNav';
import requests from '../../Request';
import ListContent from '../../Components/ListContent/ListContent'
import Orginals from '../../Components/Netflix Orginals/Originals';
import { HomePage } from './HomeStyle.js';

const Home = ()=>{

    return(
        <HomePage
        
        
        >
        <Nav/>
        <Banner/>
        
        <Orginals title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow/>
        <ListContent title="Trending Now" fetchUrl={requests.fetchTrending} />
        <ListContent title="Top rated" fetchUrl={requests.fetchTopRated} />
        <ListContent title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <ListContent title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <ListContent title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <ListContent title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <ListContent title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    
    
        

        
    









        </HomePage>
    )
}

export default Home;