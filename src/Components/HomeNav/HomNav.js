import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {NavbarContent ,Navbar ,NavLogo , NavLogoImage ,NavSignImage ,NavSign ,Container
}from './HomwNavStyle.js'


const Nav = () =>{

    const history = useHistory();

    const [scroll , setScroll] =useState(false)
    const scrollNavbar = ()=>{

        if (window.scrollY>50){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(()=>{

        window.addEventListener("scroll", scrollNavbar)
        return ()=> window.removeEventListener("scroll" , scrollNavbar)
    })

    return(
        
        <Navbar className={` nav ${scroll && "nav-black"}`}>
            <Container>
            <NavbarContent className="nav-content" >
                <NavLogo >
                    <NavLogoImage onClick={()=>history.push("/")} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></NavLogoImage>

                </NavLogo>
                <NavSign  >
                    <NavSignImage onClick={() => history.push("/profile")} src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"></NavSignImage>

                </NavSign>
            </NavbarContent>
            </Container>
        </Navbar>
    )
}

export default Nav