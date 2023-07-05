import Card from './Card/Card';

 function Cards({ characters }) { //array objetos [{...},{...}]
   
   return (
   <div>
      {
         characters.map(({id, name, species, gender, image}) => {     //character es un objeto
               return <Card
               key={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={()=>window.alert('Emulamos que se cierra la card')}
               />
         })
      }
   </div>
   )
}

export default Cards;
//con character.map() agarro el array, dentro de map agarro a character 
//y tengo q recorrer =>{....}