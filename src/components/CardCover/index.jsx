import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {getFavorite } from "../../actions";
import style from "./index.module.css";
import { ReactComponent as IconTv } from "./img/icontv.svg";
export default function CardCover({img_url, status}){
  const dispatch = useDispatch();
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
          <button onClick={()=>handleFavorite()}>{false? "Delete To Favorites":"Add To Favorites"}</button>
          <button>Follow Anime</button>
        </div>
      </div>
    );
}