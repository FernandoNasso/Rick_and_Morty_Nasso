import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import style from "./Detail.module.css";

const Detail = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.detail}>
            <div>
            <img className={style.imageStyle} src={character?.image} alt={character?.name}/>
            </div>
            <div>
            <h2>NAME: {character?.name}</h2>  
            <h3>STATUS: {character?.status}</h3>
            <h3>SPECIE: {character?.species}</h3>
            <h3>GENDER: {character?.gender}</h3>
            <h3>ORIGIN: {character?.origin?.name}</h3>   
            </div>
        </div>
    )
};

export default Detail;