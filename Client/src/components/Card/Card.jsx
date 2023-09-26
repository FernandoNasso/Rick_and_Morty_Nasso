import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import {connect} from "react-redux";
import {useState, useEffect} from "react";

function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id);
      }
      else {
         setIsFav (true);
         addFav({id, name, image, status, species, gender, origin,})
      }
   }
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   
   }, [id, myFavorites]);

   return (
      <div className={style.container}>  
         {            
               <button onClick={handleFavorite}>{isFav ? "❤️":"🤍"}</button>
         } 
         <button className={style.closeButton} onClick={() => onClose(id)}>x</button>
         <NavLink to={`/detail/${id}`}>
         <h2 className={style.Nombre}>{name}</h2>
         </NavLink>
         <img className={style.imageStyle} src={image} alt='' />
         
         
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect (
   mapStateToProps,
   mapDispatchToProps
   )(Card);