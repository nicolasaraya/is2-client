import { useState } from "react";
import NewPregunta from "./new-pregunta";

const NewForm = () => {

    const[preguntasCounter, setPreguntasCounter] = useState(0);
    const [preguntas, setPreguntas] =useState([]);

    const addPregunta = () =>{
        const aux=preguntasCounter+1;
        setPreguntasCounter(aux);
        console.log(preguntasCounter);
        setPreguntas(
            [
                ...preguntas,
                {
                    title:"Pregunta "+(preguntasCounter+1),
                    id: "new-pregunta-"+preguntasCounter,
                }
            ]
        )
        console.log(preguntas);
    }

    const rmvPregunta = (id) =>{
        console.log("trying to remove id: "+id);
        var aux=preguntas;
        var index;
        aux.map((val,indexedDB)=>{
            if(val.id===id) index=indexedDB;
        })
        aux.splice(index,1);
        setPreguntas(
            [
                ...aux,
            ]
        )
    }
    //console.log(preguntas);


    return(
        <div className="new-form__container">
            <div className="new-form__title-container">
                <input className="new-form__title-input" placeholder="Título Encuesta..."></input>
                <input className="new-form__description-input" placeholder="Descripción..."></input>
            </div>
            {
                preguntas.map((val,index)=>{
                    return(
                        <NewPregunta title={val.title} id={val.id} key={val.id} rmv={rmvPregunta} index={index+1}></NewPregunta>
                    );
                })
            }
            <button className="new-form__add-pregunta-btn" onClick={addPregunta}>Añadir pregunta</button>
        </div>
    )

}

export default NewForm;