
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLink, faSquarePollVertical, faSquarePollHorizontal } from "@fortawesome/free-solid-svg-icons";
import React from 'react'


const DashboardForm = (props) => {
    
    const {idEncuesta,index, titleEncuesta, descEncuesta, dateEncuesta} = {...props}
    const page = "/form/"+idEncuesta;
    const link = "https://is2-client.herokuapp.com/#/form/"+idEncuesta;
    const linkAns = "http://127.0.0.1:3000/#/getFormAnswers/UdeC/"+idEncuesta;
    const copyLink = () => {
        navigator.clipboard.writeText(link);
    }

    const navigate = useNavigate();
    return(

        <div className ="dashboard-forms__element-container" onClick={e=>{
            window.open(link,"_blank");    
                }}>
            <div className = "dashboard-forms__elements-title-container">
                <p className="dashboard-forms__element-title"> {index}) {titleEncuesta} </p>
                <p className="dashboard-forms__element-desc"> {descEncuesta}</p>
                <p className="dashboard-forms__element-date"> Fecha creación: {dateEncuesta['day']}/{dateEncuesta['month']}/{dateEncuesta['year']}</p>
            </div>
            <div className ="dashboard-forms__button-container">
                <button className="dashboard-forms__button-link" onClick={e=>{
                    e.stopPropagation();
                    copyLink();
                    alert("Link copiado");
                }}>
                    <FontAwesomeIcon icon={faCopy} />
                </button>
                <button className="dashboard-forms__button-results" onClick={e=>{
                    e.stopPropagation();
                    window.open(linkAns,"_blank");  
                }} >
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                </button>
            </div>
        </div>
 
    )
}

export default DashboardForm;