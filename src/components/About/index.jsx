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
    <h2>My education</h2>
    <div className = {style.cards}>
       
        <div className = {style.card}>
        <div className = {style.headerCard}>
            <span>2020-2023</span>
        </div>
        <div className = {style.bodyCard}>
            <h3>Ingenieria en Sistemas Computacionales</h3>
            <h4>Universidad Virtual del Estado de Guanajuato</h4>
            <p>Decidí estudiar esta carrera porque siempre me ha fascinado el mundo de la programación! La primera ves que programe fue en la prepa, específicamente en el lenguaje c++.
La modalidad de estudio en esta universidad es en linea y para poder sacarle provecho se debe desarrollar el habito de investigar por tu cuenta, aprender a organizarte para poder dedicarle el tiempo suficiente a cada tema y poder sacarle el máximo provecho a la información brindada, básicamente se necesita ser autodidacta y super comprometido, habilidades que se valoran y necesitan día a día en el mundo laboral.</p>
        </div>
        </div>
    </div>
    </div>
    );
}