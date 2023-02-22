import React from 'react';

const TodoLists = ({todos,onDelTodo,onToggleTodo}) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><li key={todo.id} 
                style={{background:todo.isDone ? "pink" : null}}>
                <span onClick={()=>onToggleTodo(todo.id)}>{todo.text}</span>
                <button onClick={()=>onDelTodo(todo.id)}>삭제</button></li>)}
            </ul>
        </div>
    );
};

export default TodoLists;