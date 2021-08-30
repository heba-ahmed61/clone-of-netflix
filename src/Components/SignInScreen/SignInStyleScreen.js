import styled from "styled-components";

export const SignInScreen = styled.div`
padding-top:100px;
position:relative;
z-index:5;
box-sizing:border-box;
width:100%;
padding-bottom:140px;
@media only screen and (min-width:320px) and (max-width:575.9px){

    padding-top:80px;
}


`
export const SignInContent =styled.div`
color:white;
background-Color:blue;
max-width:400px;
display:block;
margin:0 auto ;
background-color:rgba(0 ,0 ,0 ,.85);
padding:20px 20px 70px ;

@media only screen and (min-width:320px) and (max-width:575.9px){

    width:300px;
}
@media only screen and (max-width:319px){
    max-width:250px;
    
}
`

export const Title =styled.h3`
color:white;
font-weight:bold;
margin:30px 0;
`
export const Form = styled.form``
export const EmailInput = styled.div` margin:20px 0;`
export const Email = styled.input` width:95%;
padding:7px;
border-radius:5px;
outline:none;
border:none;
`
export const PasswordInput = styled.div` margin:20px 0 ;

`
export const Password =styled.input`
width:95%;
padding:7px;
border-radius:5px;
outline:none;
border:none;
`


export const SignInButton = styled.div`
margin-bottom:20px;
`
export const SignButton = styled.button`
width:95%;
color:white;
background-color:#e50914;
border:none;
outline:none;
padding:10px 20px;
font-weight:600;
cursor:pointer;
border-radius:5px;
`
export const SignUpNow = styled.div`
margin-bottom:20px;
margin-top:10px;
`
export const Span = styled.span`
color:gray;
`
export const SignLink = styled.span`
color:white;
cursor:pointer;
&:hover{
    text-decoration:underline;
}
`