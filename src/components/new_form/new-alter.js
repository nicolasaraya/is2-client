import { useEffect, useState } from "react";
const   NewAlter = (props) => {
    const {title, id, rmv, index} = {...props};
    return(
        <div className="new-alter__container " id={id}>
                <div className="new-alter__header">
                    <input className="new-alter__title-input" placeholder={"Alternativa "+index}></input>
                </div>
            </div>
    )
}
export default NewAlter;