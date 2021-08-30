import styled from "styled-components"
import Footer from "./Footer"

export const FooterSection = styled.div`
width:100%;
background-color:black;;
padding:50px 0
`
export const FooterRow =styled.div.attrs(()=>({

    className : 'row'
}))``

export const FooterContainer = styled.div`
width:65%;
margin:0 auto;
@media only screen and (min-width:320px) and (max-width:575.9px){

    width:85%;
}
@media only screen and (max-width:319px){

    width:85%;
}
`
export const FooterDetails = styled.div.attrs(()=>({
    
    className : 'col-lg-3 col-md-4 col-sm-6 col-6 my-3'

}))``

export const FooterTitle = styled.h6` color:#757571`

export const FooterUl =styled.ul` list-style:none;`
export const FooterLi = styled.li`padding:5px 0;`
export const FooterLink = styled.a`
color:#757571;
text-decoration:none;
cursor:pointer;
&:hover{
    color:#757571;
    text-decoration:underline;

}
@media only screen and (min-width:320px) and (max-width:575.9px){

    font-size:16px;
}
@media only screen and (max-width:319px){

    font-size:16px;
}

`