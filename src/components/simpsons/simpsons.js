import "./style.css"
function Simpsons(props) {
    const {simp} = props;
    return (
        <div className={'simpsons'}>
            <h1>{simp.name}  {simp.surname}</h1>
            <h2>Years {simp.age}</h2>
            <p>{simp.info}</p>
                <div className={'photo'}><img src={simp.photo} alt={simp.name}/> </div>
        </div>
    );
}

export default Simpsons;