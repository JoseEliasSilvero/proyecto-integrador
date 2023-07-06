import React, {useState} from 'react';
import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Navbar/SearchBar/Nav';



function App() {

   const [characters, setcharacters] = useState([]);

   return (
     <div>    
          <div>
            <Nav />
            <Cards characters={characters}/>
          </div>
    </div>
   );
   
}
export default App;
//style={{padding: '25px'}}

{/* <div>
     <Card
     name={Rick.name}
     species={Rick.species}
     gender={Rick.gender}
     image={Rick.image}
     onClose={()=>window.alert('Emulamos que se cierra la card')}
     />
   </div> */}

   