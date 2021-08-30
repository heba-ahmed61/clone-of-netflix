import styled from "styled-components";


export const Profile = styled.div`
width:100%;
height:100vh;
`
export const EditProfile = styled.div`
color:white;
padding-top:150px;

`
export const EditTitle = styled.h1`
font-weight:bold;
padding:0 0 10px;
border-bottom:1px solid #282c2d;

`
export const Content = styled.div`

display:block;
width:50%;
margin:0 auto;
padding:30px 10px;
@media only screen and (min-width:1200px) and (max-width:1399px){

    width:70%;
    
    
}
@media only screen and (min-width:992px) and (max-width:1199.9px){

    width:80%;
    
    
}
@media only screen and (min-width:768px) and (max-width:991.9px){

    width:80%;
    
    
}
@media only screen and (min-width:576px) and (max-width:767.9px){

    width:95%;
    
    
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    width:95%;
    
    
}
    
@media only screen and (max-width:319px){

    width:95%;
}


`
export const ImageEdit = styled.div`dispaly:block;
@media only screen and (min-width:320px) and (max-width:575.9px){

text-align:center;
    
    
}
@media only screen and (max-width:319px){

    text-align:center;
}

`

export const Image = styled.img ` width:100px;
@media only screen and (min-width:320px) and (max-width:575.9px){

    width:70px;
    
    
}
@media only screen and (max-width:319px){

    width:60px;
}


`

export const EmailEdit = styled.div`
color:white;
width:95%;
@media only screen and (min-width:320px) and (max-width:575.9px){

width:100%;
    
}
@media only screen and (max-width:319px){

    width:100%;
}

`
export const EditEmail = styled.div`
width:100%;
@media only screen and (min-width:320px) and (max-width:575.9px){

    margin: 20px 0 ;
    font-size:14px;
    
}
@media only screen and (max-width:319px){

    margin: 20px 0 ;
    font-size:14px;
}
`
export const Email = styled.h4`
margin:0 0 30px 30px;
background-color:gray;
padding:5px 10px;
@media only screen and (min-width:320px) and (max-width:575.9px){

    margin: 5px 0 10px 5px;
    font-size:16px;
    
}
@media only screen and (max-width:319px){

    margin: 5px 0 10px 5px ;
    font-size:14px;
}


`
export const SignOut = styled.div`
color:white;





`
export const SignOutButton = styled.button`
margin:0 0 30px 25px;
background-color:#e50914;
padding:5px 10px;
color:white;
border:none;
outline:none;
width:91%;
@media only screen and (min-width:576px) and (max-width:767.9px){

    width:90%;
    
    
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    margin: 10px 0 20px 5px;
    
    font-size:14px;
    width:98%;
    
}
@media only screen and (max-width:319px){

    margin: 10px 0 20px 5px;
    font-size:14px;
    width:98%;
}



`
export const EditContent = styled.div`
display:flex;
margin:30px 0;
@media only screen and (min-width:320px) and (max-width:575.9px){

    flex-direction: column;
    
}
@media only screen and (max-width:319px){

    flex-direction: column;
}
`



