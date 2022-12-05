import { useState } from "react";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import './Login.css';

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const {login} = useAuth();
  const navigate = useNavigate();
  const [error, setError]= useState();

  const handleChange = ({target: {name,value}})=>
    setUser({...user,[name]:value});
    
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email,user.password);
      navigate('/TodoApp');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="Container">
      <h2 className="Start">Iniciar Sesion</h2>
      {error && <p>{error}</p>}
      <form className="ContainerForm" onSubmit={handleSubmit}>
        <input className="EmailL" type="email" name='email'placeholder="Correo" onChange={handleChange}/>
        <input className="PassL" type="password" name='password' placeholder="Contraseña" onChange={handleChange}/>
        <button className="Button">Entrar</button>
      </form>
      
      <a className="Referen" href="crearCuenta">Registrate Gratis!</a>
      
    </div>
  )
}