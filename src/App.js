import React, { useEffect } from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Components/Profile/Profile';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser , login ,logout } from './features/user/userSlice';
import { auth } from './firebase';
import Footer from './Components/Footer/Footer';

function App() {
  const user = useSelector(selectUser);
  const dispatach = useDispatch();
  useEffect(()=>{
    const unSubscribe = auth.onAuthStateChanged((userAuth)=> {

      if (userAuth){

        dispatach(login({
          id:userAuth.id,
          email: userAuth.email
        }));
      }else{

        dispatach(logout())
      }
    });
    return unSubscribe;


  },[dispatach])
  

  const App =styled.div`
  background-color:#111;
  
  `
  return (

    <App>
      
      <BrowserRouter>
      {!user ? (<Login/>):
      (
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path = "/profile"><Profile/></Route>
          
        </Switch>
      )
      
      
      }
      <Footer/>
    
  
      </BrowserRouter>
      
    </App>
    
  
  );
}

export default App;
