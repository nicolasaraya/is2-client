import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useNavigate } from "react-router-dom";


const FormCard = (props) => {

    const {pregunta, index, setIndex, length, setRespuestas, respuestas ,setLoading} = {...props};

    const navigate = useNavigate();
    const toggleCheck = (e,id) =>{
        const alternativas = document.getElementsByClassName("alter-pregunta-"+pregunta.id);
        const estaAlternativa = document.getElementById("alter-checkbox-"+id)
        for(var i=0;i<alternativas.length;i++){
            if(alternativas[i]!==estaAlternativa && alternativas[i].checked===true){
                 alternativas[i].checked=false;
            }
        }
        var auxAlter
        auxAlter = respuestas
        if(!estaAlternativa.checked) auxAlter[index-1] = null
        else auxAlter[index-1] = id
        console.log(auxAlter)
        setRespuestas(auxAlter)
    }
    
    const changeAlter = (index) =>{
        const alternativas = document.getElementsByClassName("alter-pregunta-"+pregunta.id);
        if(respuestas[index-1]=== null){
            for(var i=0;i<alternativas.length;i++){
                alternativas[i].checked=false;
            } 
        }
        else{
            const estaAlternativa = document.getElementById("alter-checkbox-"+respuestas[index-1])
            for(i=0;i<alternativas.length;i++){
                if(alternativas[i]===estaAlternativa){
                    alternativas[i].checked=true;
                }
                else alternativas[i].checked=false;
            } 
        }
    }
    const handleBack = () => {
        const aux = index - 1;
        setIndex(aux);
        changeAlter(aux)
    }

    const handleNext = () => {
        const aux = index +1;
        setIndex(aux);
        changeAlter(aux)
    }

    const handleSubmit = async() => {
        var banderita = 0;
        for(var  i = 0 ; i < respuestas.length ; i++){
            if(respuestas[i] == null ) banderita = 1;
        }
        if(banderita){
            alert('No ha respondido todas las preguntas')
        }
        else {
            setLoading(true);
            console.log(respuestas);
            const data = JSON.stringify(respuestas);
            const res = await fetch('https://server-encuestas.herokuapp.com/newRespuesta',{
                'method' : 'POST',
                 headers : {
                     'Content-Type':'application/json'
                 },
                 body:data
             });
            
            navigate(`/submited-answer`, {replace: true});
        }

    }
    return(
        <div className="form-card__container">
            <p className="form-card__title">{index}) {pregunta.title}</p>
            <div className="form-card__alter-container">
                {
                    pregunta.alter.map((val,index)=>{
                        return(
                            <div className="form-card__alter" key={val.id}>
                                <input type='checkbox' className={"form-card__alter-checkbox alter-pregunta-"+pregunta.id} onChange={(e)=>toggleCheck(e,val.id)} id={'alter-checkbox-'+val.id}></input>
                                <p className="form-card__alter-title">{val.title}</p>    
                            </div>
                        )
                    })
                }
            </div>
            {
                length===1
                ? <div className="form-card__btn-container">
                    <button className="form-card__send-btn-only" onClick={handleSubmit}>Send{" >>"}</button>
                </div>
                : index===1
                ? <div className="form-card__btn-container">
                    <button className="form-card__next-btn-only" onClick={handleNext}>Next{" >>"}</button>
                </div>
                : index===length
                    ? <div className="form-card__btn-container">
                        <button className="form-card__back-btn" onClick={handleBack}>{"<< "}Back</button>
                        <button className="form-card__send-btn" onClick={handleSubmit}>Send</button>
                    </div>
                    : <div className="form-card__btn-container">
                        <button className="form-card__back-btn" onClick={handleBack}>{"<< "}Back</button>
                        <button className="form-card__next-btn" onClick={handleNext}>Next{" >>"}</button>
                    </div>
                
            }
        </div>
    )
}

export default FormCard;