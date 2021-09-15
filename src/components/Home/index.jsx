import React from "react";
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getAnimesAiring, getAnimesGenre} from '../../actions';
import {Link} from 'react-router-dom';
import Card from '../Card';
import Filter from '../Filter';
import style from "./index.module.css";
import List from "../List";
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
      <List title="Animes Airing" animes={animes.results}/>
      <div className = {style.containerFilter}>
      <Filter/>
      <div className={style.animeFilter}>
        {
          animesGenre.results&&animesGenre.results.map(anime=>
            <Link to = {`/Anime/${anime.mal_id}`}>
            <Card key={anime.mal_id} anime = {anime}/>
            </Link>
            )
        }
      </div>
      </div>
    </div>
  );
}
