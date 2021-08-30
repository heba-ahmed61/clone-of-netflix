
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { ListMovies , Title , Posters , PosterImage , Container ,VideoContent } from './ListContentStyle.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import YouTube from 'react-youtube';
import movieTralier from 'movie-trailer'
const ListContent = ({title , fetchUrl ,isLargeRow=false })=>{
    const movieImage="https://image.tmdb.org/t/p/original/";

    const [movies , setMovies] =useState([])
    const [trailerUrl , setTrailerUrl] =useState("")

    const fetchMovies = async ()=>{

        const {data} = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
        setMovies(data.results)
        
    }
    useEffect(()=>{

        fetchMovies()
    },[fetchUrl])

    const handelTrailer = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTralier(movie?.name || movie?.title || movie.original_name|| "").then ((url)=>{

                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>console.log(error))
        }
        

    }
    const opts ={

        height: '390',
        width:"100%" ,
        playerVars: {
            autoplay: 1,
        },
    }
    

    return(
        <ListMovies>
            <Container>
            <Title>{title}</Title>
            <Posters>

            <Swiper 
        spaceBetween={10}
        slidesPerView={8}
        breakpoints={{
        
            280: {
            width:280,
            slidesPerView: 1.7,
            spaceBetween:5

            },
            370:{
                width:370,
                slidesPerView: 2.7,
                spaceBetween:5 

            },
        
            480:{
                width:480,
                slidesPerView: 2.6
    
            },
            600: {
                width: 600,
                slidesPerView: 3.3,
            },
        
            1000:{
                width:1000,
                slidesPerView: 7
    
            }
        }}
    >
        {movies.map(movie => (

        <SwiperSlide>
            < PosterImage key ={movie.id}
            onClick = {()=> handelTrailer(movie)} src={`${movieImage}${movie.backdrop_path ? movie.backdrop_path :movie.poster_path}`} className={`${isLargeRow ? "images-large-poster" : "images-poster"}`}  ></PosterImage>
        </SwiperSlide>
        )
                    

        
        
        )}

        
    </Swiper>

        
            
        

            
            </Posters>
            <VideoContent>
            {
                trailerUrl && <YouTube videoId ={trailerUrl} opts ={opts}/>
            }
            </VideoContent>

            </Container>
        
        </ListMovies>
    )
}

export default ListContent;