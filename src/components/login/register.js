import { faAt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();
    return(
        <div className="login-page">
            <div className="login-card">
                <p className="login-title">Regístrate</p>
                <form className="login-form">
                    <div className="login-form-item">
                        <label><FontAwesomeIcon icon={faUser} /> nombre:</label>
                        <input name="nombre" placeholder="nombre..." required></input>
                    </div>
                    <div className="login-form-item">
                        <label><FontAwesomeIcon icon={faAt} /> correo:</label>
                        <input name="correo" type="email" placeholder="correo@ejemplo.com..." required></input>
                    </div>
                    <div className="login-form-item">
                        <label><FontAwesomeIcon icon={faLock} /> contraseña:</label>
                        <input name="contraseña" type="password" placeholder="********" required></input>
                    </div>
                    <button>Registrarse</button>
                </form>
                <div className="login-create-account">¿Ya tienes una cuenta?<p onClick={e=>navigate('/login',{replace:true})}>Inicia sesión</p>
                </div>
            </div>
        </div>
    )
}

export default Register;