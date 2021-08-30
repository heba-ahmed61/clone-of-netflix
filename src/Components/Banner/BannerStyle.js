import styled from "styled-components";

export const Header= styled.div`
height:70vh;

`

export const BannerContent = styled.div`
padding-top:110px;
color:white;
@media only screen and (max-width:767.9px){

    padding-top:100px;
}



`

export const BannerTitle = styled.h2`

font-size:3rem;
font-weight:800;
@media only screen and (max-width:767.9px){

    font-size:1.4rem
}




`

export const BannerButtons = styled.div `
margin:20px 0 15px;
color:white;

`
export const PlayButton =styled.button`
background-color:rgba(51,51,51,.7);
padding: .5rem 2rem;
margin:0 10px;
color:white;
border-radius:0.2vw;
out-line:none;
border:none;
&:hover{
    color:#000;
    background-color:#e6e6e6;
    transition:all .5s ease;
    cursor:pointer
}


`
export const ListButton =styled.button`
background-color:rgba(51,51,51,.7);
padding: .5rem 2rem;
color:white;
border-radius:0.2vw;
out-line:none;
border:none;
&:hover{
    color:#000;
    background-color:#e6e6e6;
    transition:all .5s ease;
    cursor:pointer
}


`
export const Container = styled.div`

width:90%;
margin:0 auto;
`

export const BannerDescription = styled.p`

font-size:27px;
max-width:360px;
line-height:35px;
font-weight:bold;
@media only screen and (max-width:767.9px){

    font-size:20px
}

`

export const FadeBottom = styled.div`
height:7.4rem;
background-image:liner-gradient(180deg , transparent ,rgba(37,37.37,0.6),#111)

`