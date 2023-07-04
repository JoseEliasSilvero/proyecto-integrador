export default function SearchBar({onSearch}) {
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}

//no tengo q invocar a la funcion xq quiero que se ejecute cuando se haga click