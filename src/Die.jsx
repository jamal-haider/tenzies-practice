export default function Die(props){
    return(
        <div className="die-face">
            <h2>{props.data.value}</h2>
        </div>
    )
}