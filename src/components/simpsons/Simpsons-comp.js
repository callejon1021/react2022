import {simpsons} from "./data";
import Simpsons from "./simpsons";
import "./style.css"

function SimpsonsComp() {
    return (
        <div className={'main'}>
            {
              simpsons.map((value, index) => <Simpsons key = {index} simp = {value}/>)
            }
        </div>

    );
}

export default SimpsonsComp;