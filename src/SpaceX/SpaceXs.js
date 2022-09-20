import {useState} from "react";
import SpaceX from "./SpaceX";


function SpaceXs() {

    const [fly, setFly] = useState([]);

    fetch('https://api.spacexdata.com/v3/launches')
        .then(value => value.json())
        .then(value => {
            setFly(value)
        })

    return (
        <div className={'rockets'}>
            {
                fly.map((value, index) => <SpaceX key = {index} item = {value}/>)

            }

        </div>
    );
}

export default SpaceXs;