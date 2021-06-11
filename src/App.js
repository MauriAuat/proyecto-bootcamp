import React, {useEffect} from 'react'
import './App.css';
import Modals from './components/Modals';
import Header from './components/Searching-bar.js';


function App() {
  const hash= "41cd88a2c0ac24f09b136ff769461b9f";
  // const [item, setItem] = useState(null);

  useEffect(()=>{
    getData()
  },[]);
  const getData = async ()=>{
    const data = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=658e18f8683906f0d0b8faf4bc7cf703&hash=${hash}`
      )
      const characters = await data.json();
      console.log(characters);
  }
  return (
    <div className="App">
      <Header />
      <Modals />
    </div>
  );
}

export default App;
//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=658e18f8683906f0d0b8faf4bc7cf703&hash=41cd88a2c0ac24f09b136ff769461b9f
//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=b6f7c0bedbe13be6fde215ac21c638cb&hash=${hash}