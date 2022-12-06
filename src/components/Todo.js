import {useState} from "react";

export default function Todo({item, onUpdate, onDelete, onComplete}){
    const [edit, setEdit] = useState(false);
 
    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(e){
            e.preventDefault();
        }
    
    function handleChange(e){
        const value = e.target.value;
        setNewValue(value)
    }

    function handleClick(){
        onUpdate(item.id, newValue)
        setEdit(false)
    }

        return (
            <form className="todoUpdate" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="buttonUp" onClick={handleClick}>Actualizar</button>
            </form>
        )
    }

    function TodoElement(){
        return <div className="todoInfo">
                    <div className={item.completado ? 'true' : ''}>
                        <span className="todoTitle">{item.title}</span>
                    </div>
                    
                    <button className="buttonEdit" onClick={() => setEdit(true)}>Editar</button>
                    <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Eliminar</button>
                    <button className="buttonComplete" onClick={() => onComplete(item.id)}>√</button>
            </div>
    }

    return <div className="todo">{edit ? <FormEdit/> : <TodoElement/>}</div>
}