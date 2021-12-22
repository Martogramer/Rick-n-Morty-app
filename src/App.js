import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import Pagination from "./components/Pagination";


function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const url = "https://rickandmortyapi.com/api/character";
  const rickFetch = (url) =>{
    fetch(url)
      .then(response=>response.json())
      .then((data)=> {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error=>console.log(error))
  }

  const onPrev = () => {
    rickFetch(info.prev);
  }
  const onNext = () => {
    rickFetch(info.next);
  }

  useEffect(() => {
    rickFetch(url);
  }, [])

  return (
    <div className="bg-secondary">
      <Navbar brand="Rick-and-Morty-App"/>
      <div className="container mt-5">
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext}/>
      </div>
    </div>
  );
}

export default App;