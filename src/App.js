import React, {useState} from 'react';
import './App.css';
import Cards from './components/Cards/Cards.jsx';
// import Card from './components/Card/Card';
import Nav from './components/Navbar/SearchBar/Nav';
import axios from "axios"



function App(id) {

   // function onSearch(dato) {
   //    axios(`https://rickandmortyapi.com/api/character/${dato}`)
   //    .then(({ respuesta }) => {
   //       console.log("llegue ok", respuesta);
   //       if (respuesta.data.name) {
   //          setcharacters((oldChars) => [...oldChars, respuesta.data]);
   //       } else {
   //          window.alert('¡No hay personajes con este ID!');
   //       }
   //    });
   // }

   function onSearch(id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {return res.json()})
      .then((data) => {if (data.name) {
         setcharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }});
   }
   
   function onClose(id){
      // window.alert("onClose :)"); 
      // let arregloFiltrer = characters.filter()
      // setcharacters(arregloFiltrer)
      characters.filter((pj)=> {
         return pj.id !==id;
      })
   }

  
   const [characters, setcharacters] = useState([]);  //el useState solo se usa para crear el estado 

   return (
     <div>    
          <div>
            <Nav onSearch={onSearch}/>
            <Cards characters={characters} onClose={onClose}/>
          </div>
    </div>
   );
   
}
export default App;   

 // function onSearch(dato){    //modif el estado de character
   //    setcharacters([...characters, {}])      //aca recibe el nuevo estado, ... nos quedamos con todo lo q tenia characters
   // }