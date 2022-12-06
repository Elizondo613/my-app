import React from 'react';
import TodoApp from './components/TodoApp';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import { Signup } from './components/Signup.js';
import {AuthProvider} from './authentication/Auth';
import { ProtectRoute } from './components/ProtectRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="crearCuenta" element={<Signup />} />
        <Route path="/TodoApp" element={<ProtectRoute> <TodoApp/> </ProtectRoute>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
