import {
  GET_ANIMES,
  GET_ANIMES_AIRING,
  GET_ANIME,
  GET_ANIME_FAVORITE,
  GET_ANIME_GENRE,
} from "../actions";

const initialState = {
  animeResults: [],
  animeAiring: [],
  animeFavorites: [],
  animeGenre: [],
  anime: {},
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ANIMES:
      return { ...state, animeResults: payload };
    case GET_ANIME:
      return { ...state, anime: payload };
    case GET_ANIME_FAVORITE:
      return {
        ...state,
        animeFavorites: state.animeFavorites.concat([payload]),
      };
    case GET_ANIMES_AIRING:
      return { ...state, animeAiring: payload };
    case GET_ANIME_GENRE:
      return { ...state, animeGenre: payload };
    default:
      return state;
  }
}
