import React from "react";
import logo from './Images/logo.png';

const Header = () =>{

    return ( 
    <>
    <div className="header">
        <img src={logo} alt="Logo" width="60" height="60" />
        <h1 className="main-heading"> Depp Keep </h1>
    </div>
    </>
    );};

export default Header;