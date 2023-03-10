import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  // const { isLoading, data: todos = [] } = useGetTodosQuery();
  const { isLoading, data: todo } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {
    setTodoId(todoId - 1);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'} </h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>
        Prev Todo
      </button>
      <button onClick={nextTodo}>
        Next Todo
      </button>

      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <strong> {todo.completed ? 'DONE' : 'Pending'} </strong>
            {todo.title}
          </li>
        ))}
      </ul> */}



    </>
  )
}
