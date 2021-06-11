import React from 'react'
import './styles/searching-bar.css'
import logo from './images/LOGO MARVEL.jpg'
const Header =(props)=>{
    return(
        <div className="container">
            <img src={logo} alt= "Imagen Marvel" className="image"/>
            <form className= "searchingNav">
                <input type="text" className= "input" placeholder="Input character"></input>
                <button  onClick={console.log("Hola mundo")} className="btn">Search</button>
            </form>

        </div>

    );
}

export default Header;