import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const   NewAlter = (props) => {

    const {title, id, index, rmvAlter, idPregunta} = {...props};

    const handleDelete = () => {
        rmvAlter(id);
    }

    const stopPropagation = (e) => {
        const preguntaActiva = document.getElementsByClassName('pregunta-activa');
        const estaPregunta = document.getElementById(idPregunta);
        if (preguntaActiva[0]===estaPregunta) e.stopPropagation();
    }

    return(
        <div className="new-alter__container " id={id}>
                <div className="new-alter__header">
                    <input className="new-alter__title-input" placeholder={"Alternativa "+index} onClick={(e)=>stopPropagation(e)}></input>
                    <button className="new-alter__delete-btn" onClick={(e)=>{
                        e.stopPropagation();
                        handleDelete();
                    }}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
            </div>
    )
}
export default NewAlter;