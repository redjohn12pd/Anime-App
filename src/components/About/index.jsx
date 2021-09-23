import React from 'react';
import style from './index.module.css';
import logoGit from './img/git.png';
import logoIn from './img/in.png';
import CardLonger from '../CardLonger';
import {uveg, itz, henry, person} from './Data.jsx';
import Footer from '../Footer';
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
    <div className = {style.row}>
    <CardLonger data = {person}/>
    </div>
    <div className = {style.row}>
    <CardLonger data = {itz} state ={true}/>
    <CardLonger data = {uveg} state ={true}/>
    </div>
    <div className = {style.row}>
    <CardLonger data = {henry} state ={true}/>
    </div>
    <Footer/>
    </div>
    );
}