import React from 'react';
import  './Header.css';
import logo from "../image/logo.png"


function Header (){
    return(
        <header>
            <div className="header--logo">
                <img src={logo} alt=""/>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="" alt=""/>
                </a>
            </div>
        </header>
    )

}



    export default Header