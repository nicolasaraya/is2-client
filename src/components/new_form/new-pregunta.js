import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const   NewPregunta = (props) => {

    const {title, id, rmv, index} = {...props};

    const handleDelete= () => {

        rmv(id);
    }

    const toggleActive = () =>{
        const preguntaActiva = document.getElementsByClassName('pregunta-activa');
        const estaPregunta = document.getElementById(id);
        if(preguntaActiva.length===0) estaPregunta.classList.add("pregunta-activa");
        else if(estaPregunta===preguntaActiva[0]) estaPregunta.classList.remove("pregunta-activa");
        else {
            preguntaActiva[0].classList.remove("pregunta-activa");
            estaPregunta.classList.add("pregunta-activa");
        }
    }

    return(
        <div className="new-pregunta__container " id={id} onClick={toggleActive}>
            <div className="new-pregunta__header">
                <p className="new-pregunta__title-index">{index})</p>
                <input className="new-pregunta__title-input" placeholder={"Pregunta "+index+"..."}></input>
                <button className="new-pregunta__delete-btn" onClick={(e)=>{
                    e.stopPropagation();
                    handleDelete();
                }}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
            <div className="new-pregunta__options">

            </div>
        </div>
    )

}

export default NewPregunta;