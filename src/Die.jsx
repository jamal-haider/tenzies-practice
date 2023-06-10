export default function Die(props){

    const styles = {
        backgroundColor: props.data.isHeld ? "#59E391" : "white"
    }
    return(
        <div className="die-face" style={styles} onClick={props.toggleDice}>
            <h2>{props.data.value}</h2>
        </div>
    )
}