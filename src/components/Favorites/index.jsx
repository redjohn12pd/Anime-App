import React from "react";
import {useSelector} from "react-redux";
import List from "../List";
import style from './index.module.css';
import CardCover from '../CardCover';
export default function Favorites() {
  const {animeFavorites} = useSelector((state) => state);
  return (
    <div className={`${style.favorites} ${animeFavorites.length===0?style.hide:null}`}>
      <div className = {style.listFavorites}>
      <List title = "Favorites" animes = {animeFavorites} action = {false} />
      </div>
      <CardCover/>
    </div>
  );
}
