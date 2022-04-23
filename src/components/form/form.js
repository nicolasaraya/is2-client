import formData from "./formData";
import FormCard from "./form-card";
import { useState } from "react";

const Form = () => {

    const [index, setIndex] = useState(1);

    return (
        <div className="form__container">
            <p className="form-pregunta-index">{index}/{formData.preguntas.length}</p>
            <FormCard pregunta={formData.preguntas[index-1]} index={index} setIndex={setIndex} length={formData.preguntas.length}></FormCard>
        </div>
    )
}

export default Form; 