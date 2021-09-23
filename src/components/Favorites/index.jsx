import React from "react";
import {useSelector} from "react-redux";
import List from "../List";
import style from './index.module.css';
import CardCover from '../CardCover';
export default function Favorites() {
  const {animeFavorites, anime} = useSelector((state) => state);
  const isFavorite = ()=>{
    return animeFavorites.filter(fav=>fav.mal_id===anime.mal_id).length===1;
}
  return (
    <div className={`${style.favorites} ${animeFavorites.length===0?style.hide:null}`}>
      <div className = {style.listFavorites}>
      <List title = "Favorites" animes = {animeFavorites} action = {false} />
      </div>
      <CardCover/>
    </div>
  );
}
