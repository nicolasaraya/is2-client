

const   NewPregunta = (props) => {

    const {title, id, rmv, index} = {...props};

    const handleDelete= () => {
        rmv(id);
    }

    return(
        <div className="new-pregunta__container" id={id}>
            <div className="new-pregunta__header">
                <p className="new-pregunta__title-index">{index})</p>
                <input className="new-pregunta__title-input" placeholder={"Pregunta "+index+"..."}></input>
                <button className="new-pregunta__delete-btn" onClick={handleDelete}>Delete</button>
                <button className="new-pregunta__edit-btn">Edit</button>
            </div>
            <div className="new-pregunta__options">
            </div>
        </div>
    )

}

export default NewPregunta;