import React from "react";
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getAnimesAiring, getAnimesGenre} from '../../actions';
import {Link} from 'react-router-dom';
import Card from '../Card';
import Filter from '../Filter';
import style from "./index.module.css";
import List from "../List";
import Slider from '../Slider';
export default function Home() {
    const animes = useSelector((state) => state.animeAiring);
    const animesGenre = useSelector((state) => state.animeGenre);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAnimesAiring());
        dispatch(getAnimesGenre(1));
    },[]);
  return (
    <div className={style.container}>
      <div className={`${style.listAiring} ${!animesGenre.results&&style.hide}`}>
      <List title="Animes Airing" animes={animes.results} action = {true}/>
      </div>
      <div className = {`${style.containerFilter} ${!animesGenre.results&&style.hide}`}>
      <Filter/>
        <Slider anime = {animesGenre.results}/>
      </div>
    </div>
  );
}
