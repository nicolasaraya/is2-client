import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DashboardForm = (props) => {
    
    const {idEncuesta, titleEncuesta, descEncuesta, dateEncuesta} = {...props}
    return(
        <div >
            <p> <b>{titleEncuesta}</b>  {descEncuesta}</p>

        </div>
    )
}

export default DashboardForm;