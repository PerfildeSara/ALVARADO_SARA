import React from "react";
import './Card.css'

const Card = ({nombrePerro, resposableDePerro, tipoDecita}) => {


    return (
    <div className="AnuncioCita">
        <h2>Hola {resposableDePerro}</h2>
        <h3>Pediste una cita de{tipoDecita} para {nombrePerro}.</h3>
    </div>
    )
}
export default Card;