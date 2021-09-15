import React from 'react';
import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getAnimesGenre} from '../../actions';
import { ReactComponent as ArrowLeft } from "../CardDescription/img/iconmonstr-arrow-64 (1).svg";
import { ReactComponent as ArrowRight } from "../CardDescription/img/iconmonstr-arrow-25.svg";
import style from './index.module.css';
export default function Filter(){
    const genres = [{id:1,action:"Action"},{id:2,action:"Adventure"},{id:6,action:"Demons"},{id:27,action:"Shounen"}
    ,{id:23,action:"School"},{id:17,action:"Martial Arts"},{id:12,action:"Hentai"},{id:32,action:"Vampire"},{id:14,action:"Horror"},
    {id:16,action:"Magic"},{id:22,action:"Romance"},{id:31,action:"Super Power"}];
    const [state,setState] = useState({
      id:1,
      cont:0
    });
    const dispatch = useDispatch();
    const handleClick = (id)=>{
        dispatch(getAnimesGenre(id));
        setState({...state, id:id})
    };
    const handleNext = () => {
      if (state.cont <= genres.length - 2) {
        setState({
          //concatenamos el state viejo con la propiedad nueva modificada
          ...state,
          ["cont"]: state.cont + 1,
        });
      } else {
        setState({
          //concatenamos el state viejo con la propiedad nueva modificada
          ...state,
          ["cont"]: 0,
        });
      }
    };
    const handlePrevious = () => {
      if (state.cont > 0) {
        setState({
          //concatenamos el state viejo con la propiedad nueva modificada
          ...state,
          ["cont"]: state.cont - 1,
        });
      }
    };
    return(
        
            <details className={style.filterDetail}>
            <summary>Filter</summary>
            <div className = {style.containerFilter}>
            <button
            className={style.button}
            onClick={() => handlePrevious()}
          >
            <ArrowLeft />
          </button>
            <ul className={style.filter}>
                {genres.map((genre,index)=>
                       index>=state.cont? <li className ={state.id=== genre.id ?style.filterActive:null} key={index} onClick={()=>handleClick(genre.id)}>{genre.action}</li>
                    :null
                    )}
            </ul>
            <button
            className={style.button}
            onClick={() => handleNext()}
          >
            <ArrowRight />
          </button>
            </div>
            </details>
    );
}