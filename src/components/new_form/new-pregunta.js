import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import NewAlter from "./new-alter";

const   NewPregunta = (props) => {

    const {title, id, rmv, index} = {...props};
    const[alterCounter, setAlterCounter] = useState(0);
    const [alter, setAlter] = useState([]);
    const handleDelete= () => {

        rmv(id);
    }
    const addAlter = () =>{
        const aux=alterCounter+1;
        const id= "new-alter-"+alterCounter;
        const title= "Alter "+(alterCounter+1);
        setAlterCounter(aux);
        setAlter(
            [
                ...alter,
                {
                    title: title,
                    id: id,
                }
            ]
        )}
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
        <div className="new-pregunta__container " id={id} >
            <div className="new-pregunta__header">
                <p className="new-pregunta__title-index">{index})</p>
                <input className="new-pregunta__title-input" placeholder={"Pregunta "+index+"..."}></input>
                <button className="new-pregunta__add-alter-btn" onClick={addAlter} ><b>+</b></button>
                <button className="new-pregunta__delete-btn" onClick={(e)=>{
                    e.stopPropagation();
                    handleDelete();
                }}><FontAwesomeIcon icon={faTrashCan} /></button>
                <button className="new-pregunta__delete-btn" onClick={toggleActive}><FontAwesomeIcon icon={faPen} /></button>
            </div>
            <br></br>
            <div className="new-pregunta__options">
            {
                alter.map((val,index)=>{
                    return(
                        <NewAlter title={val.title} id={val.id} key={val.id} index={index+1}></NewAlter>
                    );
                })
            }
            </div>
            <br></br>
        </div>
    )

}

export default NewPregunta;