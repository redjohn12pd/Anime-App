import React from 'react';
import {Link} from 'react-router-dom';
import style from './index.module.css';
import {getAnime} from '../../actions';
import { connect } from 'react-redux';
function List({title,animes,action,getAnime}){
 const handleOnClick = (id)=>{
   getAnime(id)
 }
    return(
        <div className={style.listContainer}>
          <div className={style.listTitle}>
          <h2>{title}</h2>
          </div>
          <ul className ={style.items}>
              {
                  animes&&animes.map(anime=>
                    action?
                        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/Anime/${anime.mal_id}`}>
                      <div key={anime.mal_id} className={style.item}>
                        <span>{anime.title}</span>
                        <span className={style.label}>{anime.type==="TV"?"ANIME":anime.type}</span>
                      </div>
                    </Link>:
                    <button key={anime.mal_id} className={style.item} onClick={()=>{handleOnClick(anime.mal_id)}}>
                    <span>{anime.title}</span>
                    <span className={style.label}>{anime.type==="TV"?"ANIME":anime.type}</span>
                  </button>
                      )
              }
          </ul>
        </div>
    );
}
function mapDispatchToProps(dispatch){
    return{
      getAnime: id=>dispatch(getAnime(id))
    }
}
export default connect(null,mapDispatchToProps)(List);