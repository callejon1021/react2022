import {useState} from "react";
import Rick from "./Rick";
import "./main.css"

function Ricks() {

   const [characters, setCharacters] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results);
        });
    return (
        <div className={'styleRick'}>
            {
                characters.map(value => <Rick key = {value.id} item = {value}/>)
            }
        </div>
    );
}

export default Ricks;