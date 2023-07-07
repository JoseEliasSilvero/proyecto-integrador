import React, {useEffect, useState} from 'react';
import Home from "./components/Home"
import './App.css';
import Cards from './components/Cards/Cards.jsx';
// import Card from './components/Card/Card';
import Nav from "./components/Navbar/Nav";
// import axios from "axios"
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Favorites from "./components/Favorites/Favorites";
////////////////////////////////////////////////////




function App(id) {
   const navigate = useNavigate();
   const[access, setAcces] = React.useState(false);
   const EMAIL = "joseeliassilvero@gail.com";
   const PASSWORD = "12345";

   function logout(){
      setAcces(false);
   }

   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAcces(true);
         navigate("/home");
      }
   }

   useEffect(() =>{
      !access && navigate("/");
   },[access]);

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

   function onSearch(dato) {
      fetch(`https://rickandmortyapi.com/api/character/${dato}`)
      .then((res) => {return res.json()})
      .then((data) => {if (data.name) {
         setcharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }});
   }
   
   function onClose(id) {
      // elimina personajes de characters
      // window.alert("onClose :)")
      setcharacters(
        characters.filter((pj) => {
          return pj.id !== Number(id);
        })
      );
    }

  
   const [characters, setcharacters] = useState([]);  //el useState solo se usa para crear el estado 
   const location = useLocation();
   return ( 
          <div>
            {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout}/>}
            <Routes>
               <Route path="/" element={<h1>Welcome</h1>} />
               <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
               <Route path="/about" element={<h1>About</h1>} />
               <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
   
   );
   
}
export default App;   

 // function onSearch(dato){    //modif el estado de character
   //    setcharacters([...characters, {}])      //aca recibe el nuevo estado, ... nos quedamos con todo lo q tenia characters
   // }

   // 
          