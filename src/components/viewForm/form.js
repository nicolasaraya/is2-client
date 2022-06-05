import FormCard from "./form-card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import Grafico from "./grafico"
import React from 'react'


const ViewForm = (props) => {
    const {empresaId} = useParams();
    const {id} = useParams();
    const [loading, setLoading]  = useState(true);

    const [datos, setDatos] = useState({});
    const [index, setIndex] = useState(1);
    const [respuestas, setRespuestas] = useState([]);
    
    const [grafico, setGrafico] = useState([
      
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 }
    ]);
    
    
    useEffect(() => {
        getData().then(data => {
              let info = Object.entries(data)
              console.log(info)
              console.log(info[1])
              console.log(info[1][1])
              console.log(info[1][1][index-1])
              console.log(info[1][1][index-1].alter)
              let size = info[1][1][index-1].alter.length
              console.log(size)
              console.log(grafico)
              let grafico = [{}]
              setGrafico(grafico)
              for(let i = 0; i < size; i++){
                let n = info[1][1][index-1].alter[i].title
                let num = info[1][1][index-1].alter[i].answers
                grafico.push({name: n, value: num})
                console.log("nombre " + n+ " cant: " + num)
              }
  
              setGrafico(grafico)
            setDatos(data);
        }).then(()=>setLoading(false));
    }, []);


    const getIndex=()=>{
      return index;
    }
    const getData = async () => {
        const request = await fetch('http://127.0.0.1:5000/getFormAnswers/UdeC/' + id, {
            'method' : 'GET' 
        });

        return await request.json();
    }

    

    return (
        <>
        {
            loading===false
            
            ?<div className = "results__container">
                

                <div className = "form__container">
                  <p className="form-title"> {datos.title}</p>
                  <p className="form-description"> {datos.description}</p>
                  <p className="form-pregunta-index">{index}/{datos.preguntas.length}</p>
                  <FormCard pregunta={datos.preguntas[index-1]} index={index} setIndex={setIndex} length={datos.preguntas.length} respuestas={respuestas} setRespuestas= {setRespuestas} setLoading={setLoading}></FormCard>
                </div>
                <Grafico index={index} grafico={grafico} data={datos}></Grafico>
                
            </div>
            :<Loading></Loading>
        }
        
        </>


    )
}

export default ViewForm;