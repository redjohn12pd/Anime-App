import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import Card from "../Card";
import { ReactComponent as FlechaIzquierda } from "./images/iconmonstr-arrow-24.svg";
import { ReactComponent as FlechaDerecha } from "./images/iconmonstr-arrow-64.svg";
export default function Cards() {
  const anime = useSelector((state) => state.animeResults);
  const [state, setState] = useState({ cont: 0});
  const handleNext = () => {
    if (state.cont <= anime.results.length - 8) {
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
  return (
    <div className={style.row}>
      <button
        className={`${style.button} ${!anime.results && style.hide}`}
        onClick={() => handlePrevious()}
      >
        <FlechaDerecha />
      </button>
      <div className={`${style.spaceTop} ${style.container}`}>
        {anime.results &&
          anime.results.map((anime, index) =>
            anime && index >= state.cont ? (
              <Link key={anime.mal_id} to={`/Anime/${anime.mal_id}`}>
                <Card anime={anime} />
              </Link>
            ) : null
          )}
        { anime.results && anime.results.length-state.cont <= 8 ?
          anime.results.map((anime, index) =>
            anime && index<8 ? (
              <Link key={anime.mal_id} to={`/Anime/${anime.mal_id}`}>
                <Card anime={anime} />
              </Link>
            ) : null
          ):null}
      </div>
      <button
        className={`${style.button} ${!anime.results && style.hide}`}
        onClick={() => handleNext()}
      >
        <FlechaIzquierda />
      </button>
    </div>
  );
}
