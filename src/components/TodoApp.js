import { useEffect, useState } from "react";
import Todo from "./Todo";
import {useAuth} from '../authentication/Auth';
import "./TodoApp.css";

export default function TodoApp(){
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo')) || []);
    const {user,logout}=useAuth()

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todos))
    }, [todos])

    function handleChange(event){
        const value = event.target.value;

        setTitle(value);
    }

    const handleLogout = async ()=>{
        await logout();
      };

    function handleSubmit(e){
        e.preventDefault();

        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
            usuario: user.uid,
        };

        const temp = [...todos];
        temp.unshift(newTodo);

        setTodos(temp);

        setTitle("");
    }

    function handleUpdate(id, value){
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const temp = todos.filter((item) => item.id !== id);
        
        setTodos(temp)
    }

    function handleComplete(id){
        const temp = [...todos]
        const item = temp.find(item => item.id === id)
        item.completado = !item.completado;
        setTodos(temp);
    }

    return (
        <div className="todoContainer">
            <p>Usuario activo: {user.email}</p>
            <form className="todoCreateForm" onSubmit={handleSubmit}>
                <input onChange={handleChange} className="todoInput" value={title}/>
                <input onClick={handleSubmit} type="submit" value = "Crear tarea" className="buttonCreate"/>
            </form>

            <div className="todosContainer">
                {
                    todos.filter(item => item.usuario===user.uid).map((item) => (
                        <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} onComplete={handleComplete}/>
                    ))
                }
            </div>

            <button className="CloseS" onClick={handleLogout}>
                Cerrar Sesión
            </button>
        </div>
    );
}