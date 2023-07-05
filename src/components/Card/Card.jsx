 import React from "react";
 import style from './card.module.css';

 function Card({name, gender, onClose, species, image}) {
   return (
      <div className={style.div}>
         <button className={style.btn}onClick={onClose}>X</button>
         <img className={style.image}src={image} alt={name} />
         <h2 className={style.name}>{name}</h2>
          <div className={style.data}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
          </div>
      </div>
   );
}

export default Card;

//usamos card como plantilla