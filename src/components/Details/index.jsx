import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAnime} from "../../actions";
import style from "./index.module.css";
import CardCover from "../CardCover";
import CardDescription from "../CardDescription";
export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnime(id));
  },[]);
  const anime = useSelector((state) => state.anime);
  return (
    <div className={style.row}>
      <CardDescription
        title={anime.title}
        type={anime.type}
        episodes={anime.episodes}
        aired={anime.aired}
        duration={anime.duration}
        rating={anime.rating}
        score={anime.score}
        rank={anime.rank}
        popularity={anime.popularity}
        premiered={anime.premiered}
        opening_themes={anime.opening_themes}
        ending_themes={anime.ending_themes}
      />
      <div className={style.synopsis}>
        {
          <iframe
            className={style.containerVideo}
            width="560"
            height="315"
            src={`${
              anime.trailer_url
                ? anime.trailer_url
                : "https://www.youtube.com/embed/GwaRztMaoY0?autoplay=1"
            }&controls=0&loop=1`}
            frameBorder="0"
          ></iframe>
        }

        <div className={style.labels}>
          {anime.genres &&
            anime.genres.map((genre,key) => (
              key<=6?
              <span key={key} className={style.label}>{genre.name}</span>
              :null
            ))}
        </div>
        <div className={style.containerText}>
          <p>{anime.synopsis}</p>
        </div>
      </div>
      <CardCover img_url = {anime.image_url} status = {anime.status} id = {id}/>
    </div>
  );
}
