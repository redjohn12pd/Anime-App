import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./index.module.css";
import Card from "../Card";
import { ReactComponent as FlechaIzquierda } from "./images/iconmonstr-arrow-24.svg";
import { ReactComponent as FlechaDerecha } from "./images/iconmonstr-arrow-64.svg";
export default function Cards({ title }) {
  const { animeResults, animeTop } = useSelector((state) => state);
  const [state, setState] = useState({ cont: 0, size: 0 });
  const handleNext = () => {
    if (state.cont <= animeResults.results.length - 8) {
      setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...state,
        ["cont"]: state.cont + 8,
      });
    } else {
      setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...state,
        ["cont"]: 0,
      });
    }
  };
  const handlePrevious = () => {
    if (state.cont > 0) {
      setState({
        //concatenamos el state viejo con la propiedad nueva modificada
        ...state,
        ["cont"]: state.cont - 8,
      });
    }
  };
  return (
    <div className={style.row}>
      <button
        className={`${style.button} ${!animeResults.results && style.hide}`}
        onClick={() => handlePrevious()}
      >
        <FlechaDerecha />
      </button>
      <div className={`${style.spaceTop} ${style.container}`}>
        {animeResults.results &&
          animeResults.results.map((anime, index) =>
            anime && index >= state.cont ? (
              <Link key={anime.mal_id} to={`/Anime/${anime.mal_id}`}>
                <Card anime={anime} />
              </Link>
            ) : null
          )}
      </div>
      <button
        className={`${style.button} ${!animeResults.results && style.hide}`}
        onClick={() => handleNext()}
      >
        <FlechaIzquierda />
      </button>
    </div>
  );
}
