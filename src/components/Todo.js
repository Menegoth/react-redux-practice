import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, clearTodo } from "../features/todoSlice";

function Todo() {
    const todo = useSelector(state => state.todo.items);
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const renderItems = todo.map((item, index) => {
        return (
            <li key={index}
            onClick={() => dispatch(removeTodo(index))}>
                {item}
            </li>
        )
    })

    function submitTodo(e) {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={e => submitTodo(e)}>
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={() => dispatch(clearTodo())}>Clear</button>
            <ul>
                {renderItems}
            </ul>
        </div>
    )
}

export default Todo;