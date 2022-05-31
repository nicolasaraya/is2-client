import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import DashboardForm from "./dashboard-form";

const Dashboard = (props) => {
    const {empresa} = useParams();
    const [loading, setLoading]  = useState(true);
    const [index, setIndex] = useState(1);
    const [paginas, setPaginas] = useState([]);
    const elemPag = 10;
    useEffect(() => {
        getData().then(data => {
            let paginas = []
            let info = Object.entries(data)
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
        }).then(()=>setLoading(false));
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
                <p className="dashboard-title">Encuestas</p>
                 <div className="dashboard-forms__container">
                    
                    {
                        paginas[index-1].map((val,ind)=>{
                            return(
                                <DashboardForm idEncuesta={val[1].id} index ={(ind+1)+((index-1)*elemPag)} titleEncuesta={val[1].title} descEncuesta={val[1].description} dateEncuesta={val[1].date} />
                            );
                        })
                    }
                </div>
                <p>{index}/{paginas.length}</p> 
            </div>
            
            :<Loading></Loading>
        }

        </>
    )
}

export default Dashboard;