import React from "react";
import { useSelector } from "react-redux";
import style from "./index.module.css";
import Slider from "../Slider"
export default function Cards() {
  const anime = useSelector((state) => state.animeResults);
  return (
    <div className={!anime.results&&style.hide}>
     <Slider anime = {anime.results}/>
    </div>
  );
}
