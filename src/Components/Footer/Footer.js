import React from 'react';
import { Link } from 'react-router-dom';
import { FooterSection  , FooterContainer , FooterRow , FooterDetails ,FooterTitle,
    FooterUl , FooterLi , FooterLink
} from './FooterStyle.js';

const Footer = () =>{

    return(
        
        <FooterSection>
            <FooterContainer>
            <FooterTitle>Questions? Contact us.</FooterTitle> 
            <FooterRow>
                <FooterDetails>
            
                <FooterUl>
                    <FooterLi><FooterLink exact to = "#">FAQ</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Investor Relations</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Privacy</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Speed Test</FooterLink></FooterLi>

                </FooterUl>
                </FooterDetails>
                <FooterDetails>
                <FooterUl>
                    <FooterLi><FooterLink exact to = "#">Help Center</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Jobs</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Cookie Preferences</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Legal Notices</FooterLink></FooterLi>

                </FooterUl>
                </FooterDetails>
                <FooterDetails>
                <FooterUl>
                    <FooterLi><FooterLink exact to = "#">Account</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Ways To Watch</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Corporate Information</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Only In Netflix</FooterLink></FooterLi>

                </FooterUl>
                </FooterDetails>
                <FooterDetails>
                    <FooterUl>
                <FooterLi><FooterLink exact to = "#">Media Center</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Terms Of Use</FooterLink></FooterLi>
                    <FooterLi><FooterLink exact to = "#">Contact Us</FooterLink></FooterLi>
                    </FooterUl>
                </FooterDetails>


            </FooterRow>
            </FooterContainer>
        </FooterSection>
    )
}
export default Footer;