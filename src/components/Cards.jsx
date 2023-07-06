import Card from './Card/Card';

import style from './Cards.module.css';

const Cards = (props) =>{
   return(
      <div className={style.div}>
         {props.characters.map((pj) =>(
            <Card
            key={pj.id}
            name={pj.name}
            species={pj.species}
            onClose={() => window.alert("funcion ventana emergente")}
            gender={pj.gender}
            status={pj.status}
            image={pj.image}
            origin={pj.origin.name}
            />
            ))}
      </div>
   );
};


export default Cards;
//con character.map() agarro el array, dentro de map agarro a character 
//y tengo q recorrer =>{....}

// function Cards({ characters }) { //array objetos [{...},{...}]
   
//    return (
//    <div className={style.div}>
//       {
//          characters.map(({id, name, species, gender, image}) => {     //character es un objeto
//                return <Card
//                key={id}
//                name={name}
//                species={species}
//                gender={gender}
//                image={image}
//                onClose={()=>window.alert('Emulamos que se cierra la card')}
//                />
//          })
//       }
//    </div>
//    )
// }