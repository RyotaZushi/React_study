import React from 'react'
import Todo from "./Todo";

export const TodoList = ({ todos, toggleTodo }) => {
    return (
        todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />)
    );
    //keyはuuidを使うといいらしい。
}

export default TodoList;