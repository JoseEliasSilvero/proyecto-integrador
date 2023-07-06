import style from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
   return (
      <div className={style.div}>
         <input className={style.input} type='search' />
         <button className={style.btn}onClick={onSearch}>Agregar</button>
      </div>
   );
}

//no tengo q invocar a la funcion xq quiero que se ejecute cuando se haga click