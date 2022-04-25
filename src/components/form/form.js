import formData from "./formData";
import FormCard from "./form-card";
import { useState } from "react";

const Form = () => {

    const [index, setIndex] = useState(1);
    const [respuestas, setRespuestas] = useState(new Array(formData.preguntas.length))
    return (
        <div className="form__container">
            <p className="form-title"> {formData.title}</p>
            <p className="form-description"> {formData.description}</p>
            <p className="form-pregunta-index">{index}/{formData.preguntas.length}</p>
            <FormCard pregunta={formData.preguntas[index-1]} index={index} setIndex={setIndex} length={formData.preguntas.length} respuestas={respuestas} setRespuestas= {setRespuestas}></FormCard>
        </div>
    )
}

export default Form; 