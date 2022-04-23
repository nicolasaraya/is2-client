const FormCard = (props) => {

    const {pregunta, index, setIndex, length} = {...props};

    const toggleCheck = (e,id) =>{
        const alternativas = document.getElementsByClassName("alter-pregunta-"+pregunta.id);
        const estaAlternativa = document.getElementById("alter-checkbox-"+id)
        for(var i=0;i<alternativas.length;i++){
            if(alternativas[i]!==estaAlternativa && alternativas[i].checked===true) alternativas[i].checked=false;
        }
    }

    const handleBack = () => {
        const aux = index - 1;
        setIndex(aux);
    }

    const handleNext = () => {
        const aux = index +1;
        setIndex(aux);
    }

    const handleSubmit = () => {
        console.log("submit");
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
                index===1
                ? <div className="form-card__btn-container">
                    <button className="form-card__next-btn-only" onClick={handleNext}>next{" >>"}</button>
                </div>
                : index===length
                    ? <div className="form-card__btn-container">
                        <button className="form-card__back-btn" onClick={handleBack}>{"<< "}back</button>
                        <button className="form-card__send-btn" onClick={handleSubmit}>send{" >>"}</button>
                    </div>
                    : <div className="form-card__btn-container">
                        <button className="form-card__back-btn" onClick={handleBack}>{"<< "}back</button>
                        <button className="form-card__next-btn" onClick={handleNext}>next{" >>"}</button>
                    </div>
                
            }
        </div>
    )
}

export default FormCard;