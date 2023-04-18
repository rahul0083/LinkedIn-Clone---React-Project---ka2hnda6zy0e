import React, { useEffect } from 'react'
import '../styles/App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Login from './Login';
import { loginuser, logoutuser, selectUser } from './UserSlice';
import {useDispatch, useSelector}  from 'react-redux';
import { auth } from 'firebase';

const App = () => {

  
const user=useSelector(selectUser);
// const dispatch=useDispatch();


  return (
    <>
    {
      !user?(<Login/>) :(
      
        <div id="app_wrapper">
        <Header />
        <div className="app_body">
         <Sidebar />
         <Feed />
         <Widget />
        </div>
       </div>
    


      )


    }
   
 </>
  )
}


export default App;
