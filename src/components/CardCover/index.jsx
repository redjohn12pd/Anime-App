import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {getFavorite } from "../../actions";
import style from "./index.module.css";
import { ReactComponent as IconTv } from "./img/icontv.svg";
export default function CardCover({img_url, status}){
  const dispatch = useDispatch();
  const isFavorite = ()=>{
        return animeFavorites.filter(fav=>fav.mal_id===anime.mal_id).length===1;
  }
  const {anime, animeFavorites}= useSelector((state) => state);
  const handleFavorite = ()=> {
        dispatch(getFavorite(anime));
  }
    return(
        <div className={style.card}>
        <img src={img_url} alt="Image not found"></img>
        <div className={style.status}>
          <IconTv />
          <span>{status}</span>
        </div>
        <div className={style.options}>
          <button onClick={()=>handleFavorite()}>{isFavorite()? "Delete To Favorites":"Add To Favorites"}</button>
          <button>Follow Anime</button>
        </div>
      </div>
    );
}