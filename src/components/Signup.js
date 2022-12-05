import { useState } from 'react';
import {useAuth} from '../context/Auth';
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
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <div className="Container">
      <h2 className='Regist'>Registrate</h2>
      {error && <p>{error}</p>}
      <form className = "ContainerForm" onSubmit={handleSubmit}>
        <input className='EmailL' type="email" name='email'placeholder="Correo" onChange={handleChange}/>
        <input className='PassL' type="password" name='password' placeholder="Contraseña" onChange={handleChange}/>
        <button className='Button'>Registrar</button>
      </form>
    </div>
  )
}