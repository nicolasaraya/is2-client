import { faCirclePlus, faSquarePollVertical, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import DashboardForm from "./dashboard-form";
import { useNavigate } from "react-router-dom";

const Dashboard = (props) => {
    const {empresa} = useParams();
    const [loading, setLoading]  = useState(true);
    const [index, setIndex] = useState(3);
    const [encuestas, setEncuestas] = useState(0);
    const [paginas, setPaginas] = useState([]);
    const elemPag = 10;
    const navigate = useNavigate();
    useEffect(() => {
        getData().then(data => {
            let paginas = []
            let info = Object.entries(data)
            setEncuestas(info.length)
            console.log(info.length)
            for(let i = 0; i < info.length/elemPag; i++){
                let pagina = []
                for(let j = 0; j < elemPag; j++){
                    pagina.push(Object.entries(data)[j+ (i*elemPag)])
                }
                paginas.push(pagina)
            }
            setPaginas(paginas)
            console.log(paginas)
            console.log(Object.entries(data).map(val => `${val[1].title}`))
        }).then(()=>setLoading(false))
        .catch(err => console.log(err))//navigate("/login", {replace: true}))
    }, []);
    
    const getData = async () => {
        const request = await fetch('http://127.0.0.1:5000/getForms/' + empresa, {
            'method' : 'GET'

        });
        return await request.json();
    }


    return (
        <>
        {
            loading===false
            ?<div className = "dashboard__container">
                <div className = "dashboard-profile">
                    <p className = "dashboard-profile__title">Bienvenid@ {empresa}</p>
                    <div className = "dashboard-profile__img"></div>
                    <div className="dashboard-profile__people-container">
                        <p className="dashboard-profile__people">X personas reciben tus encuestas </p>
                        <button className="dashboard-forms__button-addPeople" onClick={e=>{
                                e.stopPropagation();
                                }} >
                            <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                    </div>
                    
                </div>
                <div className = "dashboard-forms">
                    <div className="dashboard-forms-header-container">
                        <div className="dashboard-forms-title-container">
                            <p className = "dashboard-forms-title">Encuestas creadas</p>
                            <p className = "dashboard-forms-created">Has creado {encuestas} encuestas</p>
                        </div>
                        <button className="dashboard-forms__button-create" onClick={e=>{
                                navigate(`/${empresa}/createForm`)
                                }} >
                            <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                    </div>
                    <div className = "dashboard-forms__container">
                        {
                            paginas[index-1].map((val,ind)=>{
                                return(
                                    <DashboardForm idEncuesta={val[1].id} index ={(ind+1)+((index-1)*elemPag)} titleEncuesta={val[1].title} descEncuesta={val[1].description} dateEncuesta={val[1].date} />
                                );
                            })
                        }
                    </div>
                    <p className="dashboard-forms-index">{index}/{paginas.length}</p> 
                    
                </div>
                        
            </div>
            :<Loading></Loading>
        }

        </>
    )
}

export default Dashboard;