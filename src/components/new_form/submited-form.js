import { useParams } from "react-router-dom";

const SubmitedForm = () => {

    const {formId} = useParams();
    return (
        <div className="submited-form-page">
            <p className="submited-form-alert">Your form has been submited</p>
            <p className="submited-form-sub-alert">Thanks for using (inserte nombre de la app), your form has been sent to all our contacts.</p>
            {/*AQUI HAY QUE PONER UNA ILUSTRACIÓN*/}
            <div className="submited-form__share-container">
                <p className="submited-form-share-alert">share your form!</p>
                <div className="submited-form__btn-container">
                    <button className="submited-form__copy-btn">copy</button>
                    <input value={"http://localhost:3000/form/"+formId} readOnly className="submited-form__share-link"></input>
                </div>
            </div>
        </div>
    )
}

export default SubmitedForm;