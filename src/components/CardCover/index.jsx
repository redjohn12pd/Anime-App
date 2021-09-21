import React from "react";
import {useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {addFavorite, removeFavorite } from "../../actions";
import style from "./index.module.css";
import { ReactComponent as IconTv } from "./img/icontv.svg";
export default function CardCover({img_url, status}){
  const [button, setButton] = useState({fav:"",foll:"lol"});
  const dispatch = useDispatch();
  const isFavorite = ()=>{
        return animeFavorites.filter(fav=>fav.mal_id===anime.mal_id).length===1;
  }
  const {anime, animeFavorites}= useSelector((state) => state);
  const location = useLocation();
  const handleFavorite = ()=> {
        if(button.fav==="Add To Favorites")
        {dispatch(addFavorite(anime));
        setButton({button,fav:"Delete To Favorites"});}
        else{
        dispatch(removeFavorite(anime));
        setButton({button,fav:"Add To Favorites"});}
  }
  const handleFollow = ()=>{

  }
  useEffect(()=>{
    if(location.pathname === "/Favorites"){
      setButton({button,foll:"Go To Anime"});
    }else{
      setButton({button,foll:"Follow Anime"});
    }
    if(isFavorite()){
      setButton({button,fav:"Delete To Favorites"});
    }else{
      setButton({button,fav:"Add To Favorites"});
    }
  })
    return(
        <div className={style.card}>
        <img src={img_url} alt="Image not found"></img>
        <div className={style.status}>
          <IconTv />
          <span>{status}</span>
        </div>
        <div className={style.options}>
          <button onClick={()=>handleFavorite()}>{isFavorite()? "Delete To Favorites":"Add To Favorites"}</button>
          <button>{location.pathname === "/Favorites"?"Go To Anime":"Follow Anime"}</button>
        </div>
      </div>
    );
}