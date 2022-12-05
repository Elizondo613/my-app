import { useState } from "react";
import { useAuth } from "../authentication/Auth";
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
      setError('ALERTA: Usuario o contraseña incorrectos');
    }
  };
  return (
    <div className="Container">
      <h2 className="Message">TodoList</h2>

      {error && <p>{error}</p>}
      <form className="ContainerForm" onSubmit={handleSubmit}>
        <p>Correo electrónico: </p>
        <input className="EmailL" type="email" name='email' onChange={handleChange}/>
        <p>Contraseña: </p>
        <input className="PassL" type="password" name='password' onChange={handleChange}/>
        <button className="Button">Entrar</button>
      </form>
      
      <a className="Referen" href="crearCuenta">Registrate Gratis!</a>
      
    </div>
  )
}