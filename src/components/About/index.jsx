import React from 'react';
import style from './index.module.css';
import logoGit from './img/git.png';
import logoIn from './img/in.png';
export default function About(){

    return(
        <div className ={style.cover}>
            <div className ={style.overlay}></div>
            <div className ={style.textCover}>
                <h4 className ={style.titleCover}>Welcome</h4>
                <h4 className ={style.titleCover}>to</h4>
                <h2 className ={style.titleCover}>PD DEVELOPMENT</h2>
            </div>
            <div className ={style.iconsCover}>
                <div className ={style.icon}><img src={logoIn} alt="LinkedIn"/></div>
                <div className ={style.icon}><img src={logoGit} alt="GitHub"/></div>
            </div>
        </div>
    );
}