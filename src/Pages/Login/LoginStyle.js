import styled from "styled-components";

export const Login = styled.div`
width:100%;
background-color:black;

`

export const LoginNav = styled.div`width:100%;

background-image:url("https://assets.nflxext.com/ffe/siteui/vlv3/757ab38f-5d08-40bc-b3eb-eaba63ed8203/93c34f94-56c8-40a7-8b2e-b4aac6427977/GB-en-20210125-popsignuptwoweeks-perspective_alpha_website_medium.jpg");
height:auto;
background-size:cover;
background-position:center center;
background-repeat:no-repeat;
position:relative;
@media only screen and (min-width:1023px) and (max-width:1024px){

    height:auto;
}


`
export const Logo = styled.div``
export const SignInButton = styled.div``
export const LogoImage = styled.img `width:170px;
@media only screen and (min-width:320px) and (max-width:575px){
    width:100px
}
@media only screen and (max-width:319px){
    width:100px;
}
`
export const Container = styled.div `width:90%;
    margin:0 auto;
    display:flex;
    align-items:center;
    position:relative;

`
export const Button = styled.button`
position: absolute;
right:2%;
padding :7px 17px;
font-size:1rem;
background-color:#e50914;
font-weight:500;
border:none;
cursor:pointer;
color:white;
top:50%;
transform:translateY(-50%)

`;

export const Layout = styled.div`

position:absolute;
width:100%;
height:100%;
top:0;
left:0;
background:linear-gradient(to top ,
rgba(0,0,0,.8) 0 ,
rgba(0,0,0,0)60%,
rgba(0,0,0,.8) 100%

);


`
export const Content =styled.div` 

padding-top:150px;
text-align:center;

@media only screen and (min-width:768px) and (max-width:991.9px){

    padding-top:110px;
    }
@media only screen and (min-width:576px) and (max-width:767.9px){

padding-top:100px;
}
@media only screen and (min-width:320px) and (max-width:575.9px){

padding-top:80px;
}
@media only screen and (max-width:319px){

    
padding-top:80px;
}

`

export const Title = styled.h1`
color:white;
font-size: 60px;
position:relative;
z-index:4;
font-weight: 900;
@media only screen and (min-width:576px) and (max-width:767.9px){

    font-size:50px
    }
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:27px
}
@media only screen  and (max-width:319px){

    
    font-size:30px;
    
}


`
export const Description = styled.h2`
color:white;
margin:1rem 0;
font-size:25px;
position:relative;
z-index:4;
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:19px
}
@media only screen  and (max-width:319px){

    
    font-size:20px;
}


`

export const FormContent = styled.div`
margin:20px 0; 
display:block;
margin:0 auto;
width:50%;
padding-bottom:140px;
@media only screen and (min-width:768px) and (max-width:991.9px){
    
    width:80%;
    
    }
@media only screen and (min-width:576px) and (max-width:767.9px){

    width:80%
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    width:80%;

}
@media only screen and (max-width:319px){

    
    width:80%;
}


`
export const Form =styled.form`

position:relative;
z-index:4;
@media only screen and (min-width:768px) and (max-width:991.9px){
    
    text-align:center;
    
    }
@media only screen and (min-width:576px) and (max-width:767.9px){

    text-align:center;
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    text-align:center;

}
@media only screen and (max-width:319px){

    
    text-align:center;
}

`
export const FormTitle = styled.h3`
color:white;
text-align:center;



`
export const FormInput= styled.input`
padding: 10px ;
width:75%;
outline:none;
margin:20px 0;
height:60px;
@media only screen and (min-width:768px) and (max-width:991.9px){
    
    width:100%
    
    }
@media only screen and (min-width:576px) and (max-width:767.9px){

    width:100%
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    width:100%;
    padding:7px;
    height:50px

}
@media only screen and (max-width:319px){

    
    width:100%;
    padding:7px;
    height:50px
}


`
export const Br = styled.br``
export const FormButton = styled.button`

padding:12px 10px 12px ;
color:white;
background-color:#e50914;
border:none;
font-size:17px;
height:60px;
font-weight:bold;

@media only screen and (min-width:768px) and (max-width:991.9px){
    
    height:50px;
    width:50%;
    
    }

@media only screen and (min-width:576px) and (max-width:767.9px){
    
    height:50px;
    width:50%;
    
    }
@media only screen and (min-width:320px) and (max-width:575.9px){

    
    height:50px;
    width:50%;
}

@media only screen and (max-width:319px){

    
    height:50px;
}



`


export const Card4 =styled.div.attrs(()=>({
    className : 'row py-5 '
}))`width:100% ;
@media only screen and (max-width:991.9px) {
    flex-direction: column-reverse;
}
`
export const CardImages = styled.div.attrs(()=>({
    className : 'col-lg-6 col-12 '
}))`

margin:0 auto;
`;
export const CardDesc = styled.div.attrs(()=>({

    className : 'col-lg-6 col-12'
}))`margin-top:80px; 

@media only screen and (min-width:992px) and (max-width:1200px){

    
    margin-top:30px;
}
@media only screen and (min-width:768px) and (max-width:991.9px){

    text-align:center;
    margin-top:50px;
}
@media only screen and (min-width:320px) and (max-width:767.9px){

    
    text-align:center;
    margin-top:50px;
}
@media only screen and  (max-width:319px){

    
    text-align:center;
    margin-top:50px;
}

`

export const Image = styled.img`width:100%`
export const Container4 = styled.div`
width:70%;
margin:0 auto;

`
export const CardDetails = styled.h3`color:white;margin-top:10px;
@media only screen and (min-width:992px) and (max-width:1200px){

    
    font-size:25px;
}
@media only screen and (min-width:576px) and (max-width:991.9px){

    
    margin-bottom:20px;
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:17px;
    margin-top:20px;
    margin-bottom:20px;
}
@media only screen and (max-width:319px){

    font-size:17px;
    margin-top:20px;
}
` 
export const  CardTitle  = styled.h1`color:white;
@media only screen and (min-width:992px) and (max-width:1200px){

    
    font-size:30px;
    margin-bottom:15px;
}
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:20px;
}
@media only screen and (max-width:319px){

    font-size:20px;
}
`;

export const CardContainer = styled.div`
width:70%;
margin:0 auto;
`
export const CardRow = styled.div.attrs(()=>({
    className : ' row py-5'

}))`align-items:center;  `
export const CardDescription = styled.div.attrs(()=>({
    className : 'col-lg-6 col-12'
}))`@media only screen and (min-width:768px) and (max-width:991.9px){

    text-align:center;
}
@media only screen and (min-width:320px) and (max-width:767.9px){

    text-align:center;
}
@media only screen and (max-width:319px){

    text-align:center;
}

`
export const CardRow2 = styled.div.attrs(()=>({
    className : ' row py-5'

}))`align-items:center; @media only screen and (max-width:991.9px){
    flex-direction: column-reverse;

}`

export const CardVideo = styled.div.attrs(()=>({

    className : 'col-lg-6 col-12'
}))` position:relative; margin-bottom:20px; 
@media only screen and (min-width:768px) and (max-width:991.9px){

    text-align:center;}
@media only screen and (min-width:320px) and (max-width:767.9px){

    text-align:center;}
    @media only screen and (max-width:319px){

        text-align:center;}

`

export const VideoImage = styled.img`width:80% ; position:relative; z-index:5; `
export const Video = styled.div`
width:100%;
height:100%;
max-width:73%;
max-height:54%;
position:absolute;
top:21%;
right:16.1%;
z-index:1;
@media only screen and (min-width:320px) and (max-width:991.9px){

    right:13.7%;
    }

    @media only screen and (max-width:319px){

        right:13.7%;
        } 


`
export const Mp4Video = styled.video` width:80%; height:100%;`
export const CardContent = styled.div `width:100%; border-top:8px solid #222 ; border-bottom:8px solid #222;`
export const Card2Content = styled.div `width:100%;  border-bottom:8px solid #222; padding-bottom:10px;`

export const Mp4Video2 = styled.video`width:60%; height:100%;
@media only screen and (min-width:320px) and (max-width:991.9px){

width:50%;
} 
@media only screen and (max-width:319px){

    width:50%;
    }
`
export const Video2 = styled.div`
position:absolute;
top:15%;
right:4%;
z-index:1;
width:80%;
@media only screen and (min-width:320px) and (max-width:991.9px){

    right:10%;
    } 
    @media only screen and (max-width:319px){

        right:10%;
    }

`

export const QuestionsTitle = styled.h1`
color:white; margin:40px 0 ;text-align:center;

`
export const Questions = styled.div`
;
margin:0 auto;
width:50%;


@media only screen and (min-width:992px) and (max-width:1199.9px){

    width:80%;
}


@media only screen and (min-width:768px) and (max-width:991.9px){

    width:80%;
}

@media only screen and (min-width:576px) and (max-width:767.9px){

    width:90%;
}

@media only screen and (min-width:320px) and (max-width:575.9px){

    width:90%;
}
@media only screen and (max-width:319px){

    width:90%;
}

;
`
export const AskQustions = styled.div`background-color:#303030 ;padding:10px;
display:flex;

cursor:pointer;
margin-bottom: 5px;
color:white;
position:relative;



`
export const AskTitle =styled.h5`
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:17px;

}
@media only screen and (max-width:319px){

    font-size:12px;

}
`
export const AskIcon= styled.span` font-weight:900; font-size:20px;
position:absolute;
top:50%;
right:2%;
transform:translateY(-65%);
`
export const Answer = styled.div `background-color:#303030;`
export const AnswerQuestion = styled.p`
color:white;
padding:10px;
text-align:justufy;
font-size:20px;
`

export const ContentForm = styled.div`;
margin:50px 0 30px 0`





