import React from 'react';

import { useQuery, useDeleteTodo, useToggleTodo } from "./hooks";
import { useFlusher } from "./util";

const renderHighlight = (title, query) => {
    if (!query) return title;
    const index = title.indexOf(query);
    if (index === -1) return title;
    return (
        <React.Fragment>
            {title.slice(0, index)}
            <b>{query}</b>
            {title.slice(index + query.length)}
        </React.Fragment>
    );
};

const TodoItem = ({ id, title, completed }) => {
    const { getQuery } = useQuery();
    const deleteTodo = useDeleteTodo();
    const toggleTodo = useToggleTodo();

    return (
        <li ref={useFlusher()}>
            <input
                type='checkbox'
                checked={!!completed}
                onChange={() => toggleTodo(id)}
            />
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}>
                {completed ? title : renderHighlight(title, getQuery())}
            </span>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    )
};

export default React.memo(TodoItem);
