import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import { ReactComponent as RightArrow } from "./img/iconmonstr-arrow-64.svg";
import { ReactComponent as LeftArrow } from "./img/arrow-right.svg";
import style from './index.module.css';

export default function Slider({anime}){
  const [state, setState] = useState({ cont: 0});
  const handleNext = () => {
    if (state.cont <= anime.length - 8) {
      setState({
        ...state,
        cont: state.cont + 8,
      });
    } else {
      setState({
        ...state,
        cont: 0,
      });
    }
  };
  const handlePrevious = () => {
    if (state.cont > 0) {
      setState({
        ...state,
        cont: state.cont - 8,
      });
    }
  };
    return(
        <div className = {style.slider}>
            <button
        className={`${style.button} ${!anime && style.hide}`}
        onClick={() => handlePrevious()}
      >
        <RightArrow />
      </button>
      <div className={`${style.spaceTop} ${style.container}`}>
        {anime &&
          anime.map((anime, index) =>
            anime && index >= state.cont ? (
              <Link key={anime.mal_id} to={`/Anime/${anime.mal_id}`}>
                <Card anime={anime} />
              </Link>
            ) : null
          )}
        { anime && anime.length-state.cont <= 8 ?
          anime.map((anime, index) =>
            anime && index<8 ? (
              <Link key={anime.mal_id} to={`/Anime/${anime.mal_id}`}>
                <Card anime={anime} />
              </Link>
            ) : null
          ):null}
      </div>
      <button
        className={`${style.button} ${!anime && style.hide}`}
        onClick={() => handleNext()}
      >
        <LeftArrow />
      </button>
        </div>
    );
}