import {
  GET_ANIMES,
  GET_ANIMES_AIRING,
  GET_ANIME,
  GET_ANIME_FAVORITE,
  REMOVE_ANIME_FAVORITE,
  GET_ANIME_GENRE,
} from "../actions";

const initialState = {
  animeResults: [],
  animeFavorites: [],
  animeAiring: [],
  animeGenre: [],
  anime: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ANIMES:
      return { ...state, animeResults: payload };
    case GET_ANIME:
      payload.isfavorite=false;
      return { ...state, anime: payload };
    case GET_ANIME_FAVORITE:
     if(state.animeFavorites.filter(fav=>fav.mal_id===payload.mal_id).length===0){
      payload.isfavorite=true;
      return { ...state, animeFavorites: state.animeFavorites.concat([payload])}
     }else{
       return state;
     }
    case REMOVE_ANIME_FAVORITE:
        return{...state, animeFavorites:state.animeFavorites.filter( anime=>anime.mal_id !== payload.mal_id
        )}
    case GET_ANIMES_AIRING:
      return { ...state, animeAiring: payload };
    case GET_ANIME_GENRE:
      return { ...state, animeGenre: payload };
    default:
      return state;
  }
}

