import React from "react";
import style from "./index.module.css";
export default function Card({ anime }) {
  return (
    <div className={style.card}>
      <div className={style.headerCard}>
        <span>{anime.title}</span>
      </div>
      <div className={style.bodyCard}>
        <div
          className={style.imgCard}
          style={{
            backgroundImage: "url(" + `${anime.image_url}` + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}
