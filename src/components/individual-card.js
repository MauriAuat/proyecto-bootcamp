import React,{useState} from 'react';
import './styles/individual-card.css';
import Modal from './modal.js'
const IndividualCard = ({personaje}) =>{
   
const [modal, setModal] = useState(false);

    const openModal =() =>{
        
        setModal(true);
    }

    const closeModal =() =>{ 
        setModal(false);
    }
    

    return(
<div className= "container-card">
        <img onClick={openModal}  className= "imagen" src={personaje.thumbnail.path + "." + personaje.thumbnail.extension} alt={personaje.name}></img>
        
        <p   >{personaje.name}</p>
        <Modal isOpen={modal} closeModal={closeModal}/>
        
        
        
</div>
    )
    
}

export default IndividualCard;