import React from 'react';
import Todos from './Todo'
const TodoList = ({ todos, setTodos , filteredTodos}) => {
    console.log(typeof todos)
    return (
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => (
                        <Todos
                            setTodos={setTodos}
                            todos={todos}
                            key={todo.id}
                            text={todo.text}
                            id={todo.id}
                            todo={todo}/>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default TodoList;