import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard, faCopy } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

const SubmitedForm = () => {

    const {formId} = useParams();

    const link = "https://is2-client.herokuapp.com/#/form/"+formId;

    const copyLink = () => {
        navigator.clipboard.writeText(link);
    }

    return (
        <div className="submited-form-page">
            <p className="submited-form-alert">Your form has been submited</p>
            <p className="submited-form-sub-alert">Thanks for using UdeC Forms, your form has been sent to all our contacts.</p>
            {/*AQUI HAY QUE PONER UNA ILUSTRACIÓN*/}
            <div className="submited-form__share-container">
                <p className="submited-form-share-alert">share your form!</p>
                <div className="submited-form__btn-container">
                    <button className="submited-form__copy-btn" onClick={copyLink}><FontAwesomeIcon icon={faClipboard} className="clipboard-icon"/> copy</button>
                    <input value={link} readOnly className="submited-form__share-link"></input>
                </div>
            </div>
        </div>
    )
}

export default SubmitedForm;