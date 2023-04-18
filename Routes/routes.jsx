import {
    createBrowserRouter,
  } from "react-router-dom";
import Login1 from "../Pages/Login1";
import React from 'react'


export const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Login1 /></div>,
    },
  ]);