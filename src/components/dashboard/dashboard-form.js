import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashboardForm = (props) => {
    
    const {idEncuesta,index, titleEncuesta, descEncuesta, dateEncuesta} = {...props}
    return(
        <div className ="dashboard-forms__element-container">
            <p className="dashboard-forms__element-title"> {index}) {titleEncuesta} </p>
            <p className="dashboard-forms__element-desc"> {descEncuesta}</p>
        </div>
    )
}

export default DashboardForm;