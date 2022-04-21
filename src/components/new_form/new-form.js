import { useState } from "react";
import NewPregunta from "./new-pregunta";

const NewForm = () => {

    const[preguntasCounter, setPreguntasCounter] = useState(0);
    const [preguntas, setPreguntas] = useState([]);

    const addPregunta = () =>{
        const aux=preguntasCounter+1;
        const id= "new-pregunta-"+preguntasCounter;
        const title= "Pregunta "+(preguntasCounter+1);
        setPreguntasCounter(aux);
        setPreguntas(
            [
                ...preguntas,
                {
                    title: title,
                    id: id,
                }
            ]
        )

    }

    const rmvPregunta = (id) =>{
        var aux=preguntas;
        var ind;
        aux.map((val,index)=>{
            if(val.id===id) ind=index;
        })
        aux.splice(ind,1);
        setPreguntas(
            [
                ...aux,
            ]
        )
    }

    return(
        <div className="new-form__container">
            <div className="new-form__title-container">
                <input className="new-form__title-input" placeholder="Título Encuesta..."></input>
                <input className="new-form__description-input" placeholder="Descripción..."></input>
            </div>
            <div className="new-form__preguntas-container">
                {
                    preguntas.map((val,index)=>{
                        return(
                            <NewPregunta title={val.title} id={val.id} key={val.id} rmvPregunta={rmvPregunta} index={index+1}></NewPregunta>
                        );
                    })
                }
            </div>
            <button className="new-form__add-pregunta-btn" onClick={addPregunta}>Añadir pregunta</button>
        </div>
    )

}

export default NewForm;