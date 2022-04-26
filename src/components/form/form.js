import FormCard from "./form-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Form = (props) => {
    const {id} = useParams();

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
    useEffect(() => {
        fetch('http://localhost:5000/getForm/' + id, {
            'method' : 'GET' 
        }).then (response => response.json().then(data => {
            setDatos(data);
        }));
    }, []);
    //console.log(datos)


    const [index, setIndex] = useState(1);
    const [respuestas, setRespuestas] = useState(new Array(datos.preguntas.length));

    return (
        <div className = "form__container">
            <p className="form-title"> {datos.title}</p>
            <p className="form-description"> {datos.description}</p>
            <p className="form-pregunta-index">{index}/{datos.preguntas.length}</p>
            <FormCard pregunta={datos.preguntas[index-1]} index={index} setIndex={setIndex} length={datos.preguntas.length} respuestas={respuestas} setRespuestas= {setRespuestas}></FormCard>
        </div>
    )
}

export default Form;