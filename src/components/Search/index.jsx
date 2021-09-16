import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {getAnimes} from '../../actions';
import style from './index.module.css';
export default function Search(){
    const history = useHistory();//nos permite acceder al historial de rutas
    const [input,setInput] = useState("");
    const [error,setError] = useState("")
    const dispatch = useDispatch();
    const handleOnClick = (e)=>{
        e.preventDefault();
        history.push("/Animes");//nos lleva a la ruta indicada
        dispatch(getAnimes(input));
        setInput("");
    };
    const handleOnChange = (value)=>{
        if(value === ""){
            setError("Please enter a title to continue!")
        }else{
            setError("")
        }
        setInput(value);
    };
    return(
        <form onSubmit={(e)=>{handleOnClick(e)}} className = {style.search}>
            <input className = {style.input} onChange = {e=>handleOnChange(e.target.value)} value ={input} placeholder ={error===""?"Look your favorite anime...":error}></input>
           <button disabled = {input === ""?true:false} type ="submit" className={style.button}>
           Search Anime
           </button>
        </form>
    )
}