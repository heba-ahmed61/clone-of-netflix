import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title , Image , ContentVideo} from './OriginalsStyle.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import YouTube from 'react-youtube';
import movieTralier from 'movie-trailer'
const Originals = ({title , fetchUrl , isLargeRow = false})=>{
    const movieImage="https://image.tmdb.org/t/p/original/";
    const [trailerUrl , setTrailerUrl] =useState("")

    const [originals , setOriginals]=useState([])
    const fetchOrginals = async ()=>{

        const {data} = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`)
        setOriginals(data.results)
        console.log(data.results)
        
    }
    const handelTrailer = (movie) =>{

        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTralier( movie?.name || "").then ((url)=>{

                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(urlParams.get('v'))
            }).catch((error)=>console.log(error))
        }
        

    }

    useEffect(()=>{

        fetchOrginals()
    },[fetchUrl])
    
    const opts ={

        height: '390',
        width:"100%" ,
        playerVars: {
            autoplay: 1,
        },
    }
    return(
        <Container>
            <Title>{title}</Title>

            <Swiper 
        spaceBetween={10}
        slidesPerView={8}
        breakpoints={{
        
            280: {
            width:280,
            slidesPerView: 1.5,
            spaceBetween:5

            },
            370:{
                width:370,
                slidesPerView: 1.7,
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
                slidesPerView: 3
    
            }
        }}
    >
        {originals.map(o => (

        <SwiperSlide>
            < Image key ={o.id}
            src={`${movieImage}${o.backdrop_path ? o.backdrop_path :o.poster_path}`} onClick={()=> handelTrailer(o)} className={`${isLargeRow ? "images-large-poster" : "images-poster"}`}  ></Image>
        </SwiperSlide>
        )
                    

        
        
        )}

        
    </Swiper>



        <ContentVideo>
            {
                trailerUrl && <YouTube videoId ={trailerUrl} opts ={opts}/>
            }
        </ContentVideo>

        </Container>
        
        
    )
}

export default Originals