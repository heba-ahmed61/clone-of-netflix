import userEvent from '@testing-library/user-event';
import React  from 'react';
import HomeNav from '../HomeNav/HomNav';
import { Profile ,EditProfile  , EditTitle ,Content ,
    ImageEdit ,Image , EditEmail , EmailEdit , Email ,SignOut ,SignOutButton ,EditContent
} from './profileStyle.js';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
const ProfileScreen = ()=>{
    const user = useSelector(selectUser)

    return(
    <Profile>
        <HomeNav/>
        <EditProfile>
            <Content>
            <EditTitle>Edit Profile</EditTitle>
                <EditContent>
        <ImageEdit>
            <Image src ="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"></Image>
        </ImageEdit>
        <EditEmail>
            <EmailEdit>
                <Email>{user.email}</Email>
            </EmailEdit>
            <SignOut>
                <SignOutButton onClick={()=> auth.signOut() }>Sign Out</SignOutButton>
            </SignOut>
        </EditEmail>
        </EditContent>
        
        </Content>
        </EditProfile>
    </Profile>
    )
}

export default ProfileScreen;