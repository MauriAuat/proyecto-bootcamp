import React,{useState} from 'react';
import './styles/individual-card.css';

const IndividualCard = ({personaje, onClickHandler,fetchCharacter}) =>{
    const [input] = useState(personaje);

	const handleChange = () => {
	
        fetchCharacter(input);
        
	};
    
    return(
<div  className= "container-card" >
    <img onClick={(e) => {onClickHandler();handleChange(personaje);}} className= "imagen" src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name}></img>
       
       
        <p   >{personaje.name}</p>
            
</div>
    )
    
}

export default IndividualCard;