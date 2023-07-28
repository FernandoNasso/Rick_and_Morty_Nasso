import {useState} from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {
   const[id, SetId] = useState("");

   const handleChange = (event) => {
      SetId(event.target.value)

   }


   return (
      <div className={style.SearchBar}>
         <input type='search' onChange={handleChange} value = {id}/>
         <button onClick={() => {onSearch(id); SetId("")}}>AGREGAR</button>
      </div>
   );
}
