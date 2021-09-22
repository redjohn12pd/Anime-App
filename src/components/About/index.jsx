import React from 'react';
import style from './index.module.css';
import {Link} from 'react-router-dom'
import logoGit from './img/git.png';
import logoIn from './img/in.png';
export default function About(){

    return(
        <div className = {style.container}>
        <div className ={style.cover}>
            <div className ={style.overlay}></div>
            <div className ={style.textCover}>
                <h4 className ={style.titleCover}>Welcome</h4>
                <h4 className ={style.titleCover}>to</h4>
                <h2 className ={style.titleCover}>PD DEVELOPMENT</h2>
            </div>
            <div className ={style.iconsCover}>
                <a target="_blank" href="https://www.linkedin.com/in/DanielSerenoPD"><div className ={style.icon}><img src={logoIn} alt="LinkedIn"/></div></a>
                <a target="_blank" href={"https://github.com/DanielSerenoPD"}><div className ={style.icon}><img src={logoGit} alt="GitHub"/></div></a>
            </div>
    </div>
    <div className = {style.cards}>
        
    </div>
    </div>
    );
}