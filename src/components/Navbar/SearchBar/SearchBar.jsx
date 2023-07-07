import React,{ useState } from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar(props) {

   const[id, setId] = useState("")     //inicializo como string vacio

   const handleChange = (evento) =>{      //manejadores (handleChange)
      setId(evento.target.value)
   }
   return (
      <div className={style.div}>
         <input className={style.input} type='text' placeholder='Busca un personaje...' onChange={handleChange} value={id}/>
         <button className={style.btn} onClick={() => {props.onSearch(id)}}>Agregar</button>
      </div>
   );
}

//no tengo q invocar a la funcion xq quiero que se ejecute cuando se haga click