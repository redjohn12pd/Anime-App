import React from "react";
import {useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import List from "../List";
import style from './index.module.css';
import CardCover from '../CardCover';
export default function Favorites() {
  const {animeFavorites, anime} = useSelector((state) => state);
  useEffect(() => {
   
  });
  return (
    <div className={`${style.favorites} ${animeFavorites.length===0?style.hide:null}`}>
      <div className = {style.listFavorites}>
      <List title = "Favorites" animes = {animeFavorites} action = {false} />
      </div>
      <CardCover img_url = {anime.image_url} status = {anime.status}/>
    </div>
  );
}
