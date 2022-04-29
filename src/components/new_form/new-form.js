import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import NewPregunta from "./new-pregunta";
import Loading from "../loading";
import { useNavigate } from "react-router-dom";

const NewForm = () => {

    const[preguntasCounter, setPreguntasCounter] = useState(0);
    const [preguntas, setPreguntas] = useState([]);
    const [title, setTitle] = useState("Encuesta por defecto");
    const [description, setDescription] = useState("Descripción por defecto");
    const [loading, setLoading]  = useState(false);
    
    const navigate = useNavigate();

    const addPregunta = async () =>{
        const aux=preguntasCounter+1;
        const id = "new-pregunta-"+preguntasCounter;
        const title = "Pregunta "+(preguntasCounter+1);
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
        var formId;
        console.log(form);
        const formJson = JSON.stringify(form);
        setLoading(true);
        const res = await fetch('https://server-encuestas.herokuapp.com/newForm',{
           'method' : 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:formJson
        }).then(response=>response.json()
        .then(json=>{
            setLoading(false);
            formId=json;
            console.log(json);
        }))

        setPreguntasCounter(0);
        setTitle("Encuesta por defecto");
        setDescription("Descripción por defecto");
        setPreguntas([]);

        
        navigate(`/submited-form/${formId}`, {replace: true});

    }

    return(
        <div className="new-form__container">
            {loading===false
            ? <>
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
            </>
            : <Loading></Loading>
            }
        </div>
    )

}

export default NewForm;