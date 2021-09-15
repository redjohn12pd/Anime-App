import React from "react";
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getAnimesAiring, getAnimesGenre} from '../../actions';
import {Link} from 'react-router-dom';
import Card from '../Card';
import Filter from '../Filter';
import style from "./index.module.css";
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
      <div className={style.emision}>
        <div className={style.titleEmision}>
        <h2>Airing Animes</h2>
        </div>
        <ul className ={style.items}>
            {
                animes.results&&animes.results.map(anime=>
                    <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/Anime/${anime.mal_id}`}>
                    <div key={anime.mal_id} className={style.item}>
                      <span>{anime.title}</span>
                      <span className={style.label}>Anime</span>
                    </div>
                  </Link>
                    )
            }
        </ul>
      </div>
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
