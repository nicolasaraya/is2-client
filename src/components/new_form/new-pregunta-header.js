import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus,faTrashCan } from '@fortawesome/free-solid-svg-icons';

const NewPreguntaHeader = (props) => {

    const {handleDelete, addAlter, index, id, handleTitleChange} = {...props};

    const stopPropagation = (e) => {
        const preguntaActiva = document.getElementsByClassName('pregunta-activa');
        const estaPregunta = document.getElementById(id);
        if (preguntaActiva[0]===estaPregunta) e.stopPropagation();
    }

    return(
        <div className="new-pregunta__header">
            <div className="new-pregunta__title-container">
                <p className="new-pregunta__title-index">{index})</p>
                <input className="new-pregunta__title-input" placeholder={"Pregunta "+index+"..."} onClick={(e)=> stopPropagation(e)} onChange={(e)=>handleTitleChange(e.target.value)}></input>
            </div>
            <div className="new-poregunta__btn-container">
                <button className="new-pregunta__add-alter-btn" onClick={(e)=>{
                    stopPropagation(e);
                    addAlter();
                }} ><FontAwesomeIcon icon={faPlus} /></button>
                <button className="new-pregunta__delete-btn" onClick={(e)=>{
                    e.stopPropagation();
                    handleDelete();
                }}><FontAwesomeIcon icon={faTrashCan} /></button>
            </div>
        </div>
    );
}

export default NewPreguntaHeader;