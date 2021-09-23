import React from 'react';
import style from './index.module.css';

export default function Footer(){
    
    return(
        <footer className={style.footer}>
            <div className = {style.row}>
                <h3 className = {style.titleFooter}>Tecnologias Utilizadas En Este Proyecto</h3>
              <ul className = {style.itemsFooter}>
                 <li className = {style.itemFooter}>React</li>
                 <li className = {style.itemFooter}>Redux</li>
                 <li className = {style.itemFooter}>JavaScript</li> 
                 <li className = {style.itemFooter}>Html5</li>
                 <li className = {style.itemFooter}>Css3</li> 
              </ul>
              <h4 className = {style.subTitleFooter}>Daniel Marin Sereno</h4>
            </div>
        </footer>
    );
}