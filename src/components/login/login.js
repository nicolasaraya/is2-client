import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useContext, require } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const LOGIN_URL = '/auth';

const Login = () => {

    const md5 = require('md5');
    const navigate = useNavigate();
    const {sethAuth} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const inputs = Object.fromEntries(data.entries());

        console.log("user: "+inputs.correo,"pass: "+md5(inputs.contraseña))

        /*try{
            const response = await axios.post(LOGIN_URL,JSON.stringify({correo:inputs.correo,contraseña:md5(inputs.contraseña)}),{
                headers: {'Content-Type':'application/json'},
                withCredentials: true
            });

            console.log(JSON.stringify(response?.data));

            const accesToken = response?.data?.accesToken;
            const roles = response?.data?.roles;
            setAuth({correo:inputs.correo,contraseña:md5(inputs.contraseña),roles,accesToken});

        } catch (err) {
            if(!err?.response){
                alert('no hay respuesta del servidor');
            }else if(err.response?.status === 400){
                alert('no ha completado los campos')
            } else if(err.response?.status === 401){
                alert('contraseña inválida')
            }else{
                alert('Error al inicar sesión')
            }
        }*/
    }

    return(
        <div className="login-page">
            <div className="login-card">
                <p className="login-title">Inicia sesión</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="login-form-item">
                        <label><FontAwesomeIcon icon={faAt} /> correo:</label>
                        <input name="correo" type="email" placeholder="correo@ejemplo.com..." required></input>
                    </div>
                    <div className="login-form-item">
                        <label><FontAwesomeIcon icon={faLock} /> contraseña:</label>
                        <input name="contraseña" type="password" placeholder="********" required></input>
                    </div>
                    <div className="login-options">
                        <label className="login-recuerdame">Recuérdame
                            <input type="checkbox"></input>
                            <span className="login-recuerdame-checkmark"></span>
                        </label>
                        <p>Olvidé mi contraseña</p>
                    </div>
                    <button>Iniciar sesión</button>
                </form>
                <div className="login-create-account">¿No estás registrado?<p onClick={e=>navigate('/register',{replace:true})}>Crea una cuenta</p>
                </div>
            </div>
        </div>
    )
}

export default Login;