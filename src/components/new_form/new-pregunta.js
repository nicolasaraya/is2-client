import { useEffect, useState } from "react";
import NewAlter from "./new-alter";
import NewPreguntaHeader from "./new-pregunta-header";

const   NewPregunta = (props) => {

    const {title, id, rmvPregunta, index} = {...props};

    const[alterCounter, setAlterCounter] = useState(0);

    const [alter, setAlter] = useState([]);

    const rmvAlter = (id) => {
        var aux=alter;
        var ind;
        aux.map((val,index)=>{
            if(val.id===id) ind=index;
        })
        aux.splice(ind,1);
        setAlter(
            [
                ...aux,
            ]
        )
    }

    const handleDelete= () => {
        rmvPregunta(id);
    }

    const addAlter = () =>{
        const aux=alterCounter+1;
        const id= "new-alter-"+alterCounter;
        const title= "Alternativa "+(alterCounter+1);
        setAlterCounter(aux);
        setAlter(
            [
                ...alter,
                {
                    title: title,
                    id: id,
                }
            ]
        )}
        
    const toggleActive = () =>{
        const preguntaActiva = document.getElementsByClassName('pregunta-activa');
        const estaPregunta = document.getElementById(id);
        if(preguntaActiva.length===0) estaPregunta.classList.add("pregunta-activa");
        else if(estaPregunta===preguntaActiva[0]) estaPregunta.classList.remove("pregunta-activa");
        else {
            preguntaActiva[0].classList.remove("pregunta-activa");
            estaPregunta.classList.add("pregunta-activa");
        }

    }

    return(
        <div className="new-pregunta__container " id={id} onClick={toggleActive}>
            <NewPreguntaHeader handleDelete={handleDelete} addAlter={addAlter} index={index} id={id}/>
            <div className="new-pregunta__options">
            {
                alter.map((val,index)=>{
                    return(
                        <NewAlter title={val.title} id={val.id} key={val.id} index={index+1} rmvAlter={rmvAlter} idPregunta={id}></NewAlter>
                    );
                })
            }
            </div>
        </div>
    )

}

export default NewPregunta;