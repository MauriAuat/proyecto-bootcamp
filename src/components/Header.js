import React, {useState} from 'react'
import './styles/header.css'
import logo from './images/LOGO MARVEL.jpg'
const Header =({finded})=>{
    const [input, setInput] = useState('');

    const handleChange = event =>{
        // preventDefault()
        setInput(event.target.value)
        finded(event.target.value)
    }
    // console.log(input);
    return(
        <div className="container-header">
            <img src={logo} alt= "Imagen Marvel" className="image"/>
            <form className= "searchingNav">
                <input onChange={handleChange} type="text" className= "input" value={input} placeholder="Choose a character..."></input>
                <button  className="btn">Search</button>
            </form>

        </div>

    );
}

export default Header;