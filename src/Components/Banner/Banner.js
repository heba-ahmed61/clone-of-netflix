import React, { useEffect, useState } from 'react'
import {Header ,BannerContent , BannerTitle , BannerButtons , PlayButton , ListButton, Container , BannerDescription , FadeBottom} from './BannerStyle.js'
import requests from '../../Request.js'
import axios from 'axios'

const Banner = ()=>{

    const handelDescription =(string , n)=>{

        return string?.length > n ? string.substr(0 , n-1) + "...":string
    }



    const [content , setContent]=useState([])

    const fetchData = async ()=>{

        const{data} = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
        setContent(data.results[Math.floor(Math.random()*data.results.length-1)])
        console.log(data.results)
        //return data
    }
    useEffect(()=>{

        fetchData()
    },[])

    return(
        <Header className="banner"  
            style={{backgroundImage: `url("https://image.tmdb.org/t/p/original/${content?.backdrop_path}")` , 
            backgroundPosition:"center center",
            backgroundSize:"cover"
            }}>
                <BannerContent>
                    <Container>
                <BannerTitle>{  content?.title||content?.name|| content?.original_name } </BannerTitle>
                <BannerButtons>
                    <PlayButton>Play</PlayButton>
                    <ListButton>My List</ListButton>
                </BannerButtons>
                <BannerDescription>{handelDescription(content?.overview ,90)}</BannerDescription>
                
                </Container>
                </BannerContent>

                

        
        </Header>
    )
} 

export default Banner