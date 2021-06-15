import React from 'react';
import './styles/individual-card.css';

const IndividualCard = ({personaje, onClickHandler}) =>{
 

    return(
<div  className= "container-card" onClick={onClickHandler}>
        <img   className= "imagen" src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name}></img>
        
        <p   >{personaje.name}</p>
            
</div>
    )
    
}

export default IndividualCard;