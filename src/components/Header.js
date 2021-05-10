import React from 'react';
import './Header.css';

export default ({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header-logo">
                <a href="/" >
                    <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="netflix"/>
                </a>
            </div>
            <div className="header-usuario">
                <a href="netclone-user-page.vercel.app">
                    <img src = "https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="usuario"/>
                </a>
            </div>
        </header>
    );
}