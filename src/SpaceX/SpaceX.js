import './style.css'

function SpaceX(props) {
     const {item} = props;


    return (
        <div className={'rocket'}>
            <p>{item.mission_name}</p>
            <p>{item.launch_year}</p>
            <img src={item.links.mission_patch} alt={item.mission_name}/>

        </div>
    );
}

export default SpaceX;