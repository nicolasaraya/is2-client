import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    return(
        <div className="login-page">
            <div className="login-card">
                <p className="login-title">Inicia sesión</p>
                <form className="login-form">
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