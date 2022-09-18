import "./main.css"


function Rick(props) {
    const {item} = props;

    return (
        <div className={'rick'}>
            <h1>{item.name}</h1>
            <p>{item.species}</p>
            <p>{item.status}</p>
            <img src={item.image} alt={item.name}/>
        </div>
    )
}
export default Rick;