import { configureStore } from "@reduxjs/toolkit";
import  userReducer from "../components/UserSlice";


const Store=configureStore({
  reducer :{
   user:  userReducer

  },
});

export default Store;