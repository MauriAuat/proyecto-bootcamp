import React from 'react';
import './styles/individual-card.css';

const IndividualCard = ({personaje}) =>{
    // return ("Hola mundo")
    return(
<div className= "container-card">
        <img className= "imagen" src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name}></img>
        <p>{personaje.name}</p>
</div>
    )
    
}

export default IndividualCard;