import styles from "./styles.css"


function IdCard(props) {

    return (
        <div className="card">
            <p><b>Full name:</b> {props.fullName} </p>
            <p><b>Gender:</b> {props.gender} </p>
            <p><b>Birth:</b> {props.birth} </p>
            <img src={props.picture} alt={props.alt} /> 
        </div>

    )

}

export default IdCard