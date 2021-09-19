import React from "react";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import List from "../List";
import style from './index.module.css';
import CardCover from '../CardCover';
export default function Favorites() {
  const animes = useSelector((state) => state.animeFavorites);
  useEffect(() => {
   
  });
  return (
    <div className={style.favorites}>
      <div className = {style.listFavorites}>
      <List title = "Favorites" animes = {animes} />
      </div>
      <CardCover/>
    </div>
  );
}
