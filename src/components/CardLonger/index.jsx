import React from 'react';
import style from './index.module.css';

export default function CardLonger({data, state}){
    const borderColor = {
        border: `1px solid ${data.color}`
    }
    return(
        <div className = {`${style.card} ${state&&style.state}`} style = {borderColor}>
        <div className = {style.headerCard}>
            <span className ={style.bgGreen}>{data.header}</span>
        </div>
        <div className = {style.bodyCard}>
            <h3 className = {style.cardTitle}>{data.title}</h3>
            <h4 className = {`${style.cardTitle} ${style.textSuccess}`}>{data.subtitle}</h4>
            <p>{data.description}</p>
        </div>
        </div>

    );
}