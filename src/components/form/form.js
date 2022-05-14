import FormCard from "./form-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";

const Form = (props) => {
    const {id} = useParams();
    const [loading, setLoading]  = useState(true);

    const [datos, setDatos] = useState({
        title : "",
        description : "",
        preguntas : [
            {
                title : "",
                id : "",
                alter : [
                    {
                        title : "",
                        id : ""
                    }
                ]
            }
        ]
    });
    const [index, setIndex] = useState(1);
    useEffect(() => {
        fetch('https://server-encuestas.herokuapp.com/getForm/' + id, {
            'method' : 'GET' 
        }).then (response => response.json().then(data => {
            setDatos(data);
            setRespuestas(new Array(data.preguntas.length))
        })).then(()=>setLoading(false));
    }, []);

    const [respuestas, setRespuestas] = useState(new Array(datos.preguntas.length));

    return (
        <>
        {
            loading===false
            ?<div className = "form__container">
                <p className="form-title"> {datos.title}</p>
                <p className="form-description"> {datos.description}</p>
                <p className="form-pregunta-index">{index}/{datos.preguntas.length}</p>
                <FormCard pregunta={datos.preguntas[index-1]} index={index} setIndex={setIndex} length={datos.preguntas.length} respuestas={respuestas} setRespuestas= {setRespuestas} setLoading={setLoading}></FormCard>
            </div>
            :<Loading></Loading>
        }
        </>
    )
}

export default Form;