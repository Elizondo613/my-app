import { useState } from 'react';
import {useAuth} from '../authentication/Auth';
import {useNavigate} from 'react-router-dom';

export function Signup() {
  const [user,setUser] = useState({
    email:'',
    password:'',
  });
  const {signup} = useAuth();
  const navigate = useNavigate();
  const [error,setError] = useState();

  const handleChange = ({target: {name, value}}) =>{
    setUser({...user,[name]:value})
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try {
      await signup(user.email, user.password);
      navigate("crearCuenta");
    } catch (error) {
      setError('ALERTA: Usuario o contraseña incorrectos');
    }
  }
  return (
    <div className="Container">
      <h2 className='Message'>Registrate</h2>
      {error && <p>{error}</p>}
      <form className = "ContainerForm" onSubmit={handleSubmit}>
        <p>Correo electrónico: </p>
        <input className='EmailL' type="email" name='email' onChange={handleChange}/>
        <p>Contraseña: </p>
        <input className='PassL' type="password" name='password' onChange={handleChange}/>
        <button className='Button'>Registrar</button>
      </form>
    </div>
  )
}