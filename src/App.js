import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddTodoAction } from "./Container/actions/TodoActions";
import { RemoveTodoAction } from "./Container/actions/TodoActions";

function App() {
  const [todo, setTodo] = useState();
  const dispatch = useDispatch();

  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2> Redux Todo App</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a todo"
            onChange={(e) => setTodo(e.target.value)}
            style={{
              width: "350",
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
          />
          <button
            style={{
              borderRadius: "25px",
              padding: "10px",
              border: "1px solid #fff",
              color: "white",
              backgroundColor: "#0ba0f3",
            }}
          >
            Go
          </button>
        </form>
        <ul className="allTodos">
          {todos &&
            todos.map((t) => (
              <li key={t.id} className="singleTodo">
                <span className="todoText">{t.todo}</span>
                <button
                  style={{
                    borderRadius: "25px",
                    padding: "10px",
                    border: "1px solid #fff",
                    color: "white",
                    backgroundColor: "orangered",
                  }}
                  onClick={() => removeHandler(t)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
