export const GET_ANIMES = 'GET_ANIMES';
export const GET_ANIMES_AIRING = 'GET_ANIMES_AIRING';
export const GET_ANIME = 'GET_ANIME';
export const GET_ANIME_FAVORITE = 'GET_ANIME_FAVORITE';
export const GET_ANIME_GENRE = 'GET_ANIME_GENRE';
export function getAnimes(payload){
    return function(dispatch){
        return fetch(`https://api.jikan.moe/v3/search/anime?q=${payload}&page=1`)
            .then(response => response.json())
            .then(json => dispatch({type: GET_ANIMES, payload: json}))
    }
}
export function getAnime(payload){
    return function(dispatch){
        return fetch(`https://api.jikan.moe/v3/anime/${payload}`)
            .then(response => response.json())
            .then(json => dispatch({type: GET_ANIME  , payload: json}))
    }
}
export function getFavorite(payload){
    return{
        type: GET_ANIME_FAVORITE,
        payload
    }
}
export function getAnimesAiring(payload){
    return function(dispatch){
        return fetch(`https://api.jikan.moe/v3/search/anime?status=airing&order_by=score`)
            .then(response => response.json())
            .then(json => dispatch({type: GET_ANIMES_AIRING, payload: json}))
    }
}
export function getAnimesGenre(payload){
    return function(dispatch){
        return fetch(`https://api.jikan.moe/v3/search/anime?q=&page=1&genre=${payload}&order_by=score`)
            .then(response => response.json())
            .then(json => dispatch({type: GET_ANIME_GENRE, payload: json}))
    }
}
