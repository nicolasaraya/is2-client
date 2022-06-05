import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../loading";
import DashboardCard from "./dashboard-form";
import React from 'react'


const Dashboard = (props) => {
    const {empresa} = useParams();
    const [loading, setLoading]  = useState(true);
    const [datos, setDatos] = useState({});
    
    useEffect(() => {
        getData().then(data => {
            setDatos(data);
            console.log(data)
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
            ?<div className = "form__container">
                <p className="form-title"> Encuestas </p>
                 <div className="form__container">
                    {
                        Object.entries(datos).map(val =>{
                            return(
                                <DashboardCard idEncuesta={val[1].id} titleEncuesta={val[1].title} descEncuesta={val[1].description} dateEncuesta={val[1].date} />
                            );
                        })
                    }
                </div> 
            </div>
            :<Loading></Loading>
        }
        </>
    )
}

export default Dashboard;