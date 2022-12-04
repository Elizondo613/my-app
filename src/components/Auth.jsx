import React, { useState } from 'react';
import 'firebase/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import TodoApp from './TodoApp';
import "./Auth.css";

export default (props) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const auth = getAuth();

   const submit = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
   }

   const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
   }

   const logout = async () => {
    await auth.signOut();
   }

   function handleChange(e){
        const value = e.target.value;

        setEmail(value);
   }

   function handleChange2(e){
        const value = e.target.value;

        setPassword(value);
   }

   const user = auth.currentUser;

    return(
        <div>
            {
                !user &&
            
            <div className='authContainer'>
                <label className='email' htmlFor='email'>Correo electrónico: </label>
                <input className='emailSubmit' type="email" id="email" onChange={handleChange} />
                <label className='password' htmlFor='password'>Contraseña: </label>
                <input className='passwordSubmit' type="password" id="password" onChange={handleChange2} />
                <button className='newSubmit' onClick={submit}>Crear cuenta</button>
                <button className='login' onClick={login}>Iniciar sesión</button>
            </div>
            }
            {
                user && 
                <div>
                    <p className='user'>Usuario: {user.email}</p>
                    <TodoApp/>
                    <button className='out' onClick={logout}>Cerrar sesión</button>
                </div>
            }   
        </div>
    )
}