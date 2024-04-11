import { useState } from 'react';

const ToDoApp = () => {

    const [todos, setTodos] = useState([

    ]);

    const [newTodo, setNewTodO] = useState("");
    const [newTodoStatus, setNewTodoSatus] = useState(false);

    const handleNewTodoChange = (e) => {
        setNewTodO(e.target.value);
    }

    const handleNewTodoSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { title: newTodo, isCompleted: newTodoStatus }]);
        setNewTodO("");
        setNewTodoSatus("");
    }

    const handleCompletion = (e) => {
        const currentTodoIndex = Number(e.target.dataset.id);
        const updateTodoStatus = e.target.checked;
        const newTodoList = [...todos];
        const newUpdatedTodo = { ...newTodoList[currentTodoIndex] };
        newUpdatedTodo.isCompleted = updateTodoStatus;
        newTodoList.splice(currentTodoIndex, 1, newUpdatedTodo);
        setTodos(newTodoList);
    };

    const handleNewTodoStatus = (e) => {
        setNewTodoSatus(e.target.value);
    }

    return (
        <div className="todo-wrapper">
            <h1>To Do List</h1>
            <div className='todo-form'>
                <form>
                    <input type='text' placeholder='Enter new ToDo' value={newTodo} onChange={handleNewTodoChange} />
                    <select onChange={handleNewTodoStatus} value={newTodoStatus}>
                        <option value={false}>Todo</option>
                        <option value={true}>Completed</option>
                    </select>
                    <button onClick={handleNewTodoSubmit}>Add</button>
                </form>
            </div>
            <div className="todo-list">
                {!todos.length ? "Enter your first To DO" : null}
                {
                    todos.map((todo, idx) => (
                        <div className="todoitems">
                            <input type='checkbox' data-id={idx} checked={todo.isCompleted} onChange={handleCompletion} />
                            <span className={todo.isCompleted ? "completed" : ""}>{todo.title}</span></div>
                    ))
                }
            </div>
        </div>
    )
}

export default ToDoApp;