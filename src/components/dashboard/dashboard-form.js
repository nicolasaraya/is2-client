import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faLink, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";

const DashboardForm = (props) => {
    
    const {idEncuesta,index, titleEncuesta, descEncuesta, dateEncuesta} = {...props}
    const page = "/form/"+idEncuesta;
    const link = "https://is2-client.herokuapp.com/#/form/"+idEncuesta;
    
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
                }} >
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                </button>
            </div>
        </div>
 
    )
}

export default DashboardForm;