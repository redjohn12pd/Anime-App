import React from "react";
import {useState,useEffect} from 'react';
import { useLocation, useHistory} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {addFavorite, removeFavorite } from "../../actions";
import style from "./index.module.css";
import { ReactComponent as IconTv } from "./img/icontv.svg";
export default function CardCover(){
  const [button, setButton] = useState({cont:0,fav:"Add To Favorites",foll:""});
  const dispatch = useDispatch();
  const {anime, animeFavorites}= useSelector((state) => state);
  const location = useLocation();
  const history = useHistory();
  const handleFavorite = ()=> {
        if(button.fav==="Add To Favorites")
        {dispatch(addFavorite(anime));
        setButton({...button,fav:"Delete To Favorites"});}
        else{
        dispatch(removeFavorite(anime));
        setButton({...button,fav:"Add To Favorites"})
       ;}
  }
  const handleSecondBtn = ()=>{
      if(location.pathname === "/Favorites"){
        history.push(`/Anime/${anime.mal_id}`);
      }
  }
  useEffect(()=>{
    const isFavorite = ()=>{
      return animeFavorites.filter(fav=>fav.mal_id===anime.mal_id).length===1;
  }
    if(isFavorite()){
      setButton({...button ,fav:"Delete To Favorites"});
    }else{
      setButton({...button ,fav:"Add To Favorites"});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[animeFavorites,button.fav,anime.mal_id])
    return(
        <div className={style.card}>
        <img src={anime.image_url} alt="not found"></img>
        <div className={style.status}>
          <IconTv />
          <span>{anime.status}</span>
        </div>
        <div className={style.options}>
          <button onClick={()=>handleFavorite()}>{button.fav}</button>
          <button onClick={() =>handleSecondBtn()}>{location.pathname === "/Favorites"?"Go To Anime":"Follow Anime"}</button>
        </div>
      </div>
    );
}