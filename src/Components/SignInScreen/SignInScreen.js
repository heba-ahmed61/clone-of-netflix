import React, { useRef } from 'react';
import { SignInScreen ,SignInContent ,Title ,Form , EmailInput,Email,PasswordInput,
    Password, SignInButton , SignButton , SignUpNow , Span , SignLink
} from './SignInStyleScreen.js';
import { auth } from '../../firebase.js';

const SignIn = () =>{

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser);
        })
        .catch((error)=>{
            alert(error.message)
        })
    }

    return(
        <SignInScreen>
        <SignInContent>
        <Title>Sign In</Title>
        <Form >
            <EmailInput>
                <Email type="email" placeholder="Email" ref={emailRef} ></Email>
            </EmailInput>
            <PasswordInput>
                <Password  ref={passwordRef}type="password" placeholder="Password"  ></Password>
            </PasswordInput>
            <SignInButton>
                <SignButton onClick={signIn} >sign In</SignButton>
            </SignInButton>
            <SignUpNow>
                <Span>New To Netflix? </Span>
                <SignLink onClick={register}>Sign Up Now</SignLink>
            </SignUpNow>
        </Form>
        </SignInContent>
        </SignInScreen>
    )
}

export default SignIn;