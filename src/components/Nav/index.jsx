import React from 'react';
import style from './index.module.css';
import Search from '../Search/';
import {Link} from 'react-router-dom';
export default function Nav(){
    return(
        <nav className = {style.nav}>
            <ul className = {style.navItems}>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/"><li><div className={style.logo}></div></li></Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/"><li>Home</li></Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/Favorites"><li>Favorites</li></Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to = "/About"><li>About Me</li></Link>
            </ul>
            <Search/>
        </nav>
    );
}