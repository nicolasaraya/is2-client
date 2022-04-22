import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import NewPregunta from "./new-pregunta";

const NewForm = () => {

    const[preguntasCounter, setPreguntasCounter] = useState(0);
    const [preguntas, setPreguntas] = useState([]);
    const [title, setTitle] = useState("Encuesta por defecto");
    const [description, setDescription] = useState("Descripción por defecto");

    const addPregunta = async () =>{
        const aux=preguntasCounter+1;
        const id= "new-pregunta-"+preguntasCounter;
        const title= "Pregunta "+(preguntasCounter+1);
        setPreguntasCounter(aux);
        await setPreguntas(
            [
                ...preguntas,
                {
                    title: "Pregunta por defecto",
                    id: id,
                    alter: []
                }
            ]
        )
    }

    const addAlterToPregunta = (id, alter) => {
        var aux=preguntas;
        var ind;
        aux.map((val,index)=>{
            if(val.id===id) ind=index;
        })
        aux[ind].alter=alter;
        setPreguntas([
            ...aux
        ])
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
                ...aux
            ]
        )
    }

    const preguntaTitleChange = (id, title) => {
        var aux = preguntas;
        var ind;
        aux.map((val,index)=>{
            if(val.id===id) ind=index;
        })
        aux[ind].title=title;
        setPreguntas(
            [
                ...aux
            ]
        )
    }

    const alterChange = (idPregunta, idAlternativa, title) => {
        var aux = preguntas;
        aux.map((val,index)=>{
            if(val.id===idPregunta){
                val.alter.map((val,index)=>{
                    if(val.id===idAlternativa) val.title=title;
                })
            }
        })
        setPreguntas(
            [
                ...aux
            ]
        );
    }

    const rmvAlterFromPregunta = (id, alter) => {
        var aux = preguntas;
        aux.map((val,index)=>{
            if(val.id===id) val.alter=alter;
        })
        setPreguntas(
            [
                ...aux
            ]
        )

    }

    const handleSubmit = async () => {
        
        const form = {
            title,
            description,
            preguntas
        }
        const formJson = JSON.stringify(form);
        const res = await fetch('http://localhost:5000/newForm',{
            'method' : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:formJson
        })
    }

    return(
        <div className="new-form__container">
            <div className="new-form__title-container">
                <input className="new-form__title-input" placeholder="Título Encuesta..." onChange={(e)=>setTitle(e.target.value)}></input>
                <input className="new-form__description-input" placeholder="Descripción..." onChange={(e)=>setDescription(e.target.value)}></input>
            </div>
            <div className="new-form__preguntas-container">
                {
                    preguntas.map((val,index)=>{
                        return(
                            <NewPregunta title={val.title} id={val.id} key={val.id} rmvPregunta={rmvPregunta} index={index+1} addAlterToPregunta={addAlterToPregunta} preguntaTitleChange={preguntaTitleChange} alterChange={alterChange} rmvAlterFromPregunta={rmvAlterFromPregunta}/>
                        );
                    })
                }
            </div>
            <button className="new-form__add-pregunta-btn" onClick={addPregunta}>Añadir pregunta</button>
            <button className="send-btn" onClick={handleSubmit}><FontAwesomeIcon icon={faFloppyDisk} /></button>
        </div>
    )

}

export default NewForm;