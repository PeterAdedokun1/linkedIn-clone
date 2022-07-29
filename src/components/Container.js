import styled from "styled-components";
import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
const Container = () => {
  return (
    <div>
      
      <Header />
      <Home/>
      
      <Outlet/>
    </div>
  )
}

export default Container