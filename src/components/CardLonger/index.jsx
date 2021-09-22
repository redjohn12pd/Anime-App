import React from 'react';
import style from './index.module.css';

export default function CardLonger({header,title,subtitle,description,color}){
    const borderColor = {
        border: `1px solid ${color}`
    }
    return(
        <div className = {style.card} style = {borderColor}>
        <div className = {style.headerCard}>
            <span>{header}</span>
        </div>
        <div className = {style.bodyCard}>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <p>{description}</p>
        </div>
        </div>

    );
}