import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";



function App() {

  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";
  const rickFetch = (url) =>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>setCharacters(data.results))
      .catch(error=>console.log(error))
  }
  useEffect(() => {
    rickFetch(url);
  }, [])

  return (
    <div>
      <Navbar brand="Rick-and-Morty-App"/>
      <div className="container">
        <Characters characters={characters}/>
      </div>
    </div>
  );
}

export default App;
