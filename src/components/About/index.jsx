import React from 'react';
import style from './index.module.css';
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
                <div className ={style.icon}><img src="https://www.flaticon.es/svg/static/icons/svg/174/174848.svg " alt=" "/></div>
                <div className ={style.icon}><img src="https://www.flaticon.es/svg/static/icons/svg/174/174855.svg " alt=" "/></div>
                <div className ={style.icon}><img src="https://www.flaticon.es/svg/static/icons/svg/174/174883.svg " alt=" "/></div>
                <div className ={style.icon}><img src="https://www.flaticon.es/svg/static/icons/svg/174/174879.svg " alt=" "/></div>
            </div>
        </div>
    );
}