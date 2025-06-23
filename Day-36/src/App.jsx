import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
    const API_URL = "http://localhost:4000/todos";

    const [todos, setTodos] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            setError("Failed to fetch todos");
        }
    };

    const addTodo = async (title) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, completed: false }),
            });
            const newTodo = await response.json();
            setTodos([...todos, newTodo]);
        } catch (error) {
            setError("Failed to add todo");
        }
    };

    const updateTodo = async (id, updates) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updates),
            });
            const updatedTodo = await response.json();
            setTodos(
                todos.map((todo) => (todo.id === id ? updatedTodo : todo))
            );
        } catch (error) {
            setError("Failed to update todo");
        }
    };

    const deleteTodo = async (id) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            setError("Failed to delete todo");
        }
    };

    return (
        <div className="container">
            <h1>Get Things Done!</h1>
            {error && <div className="error">{error}</div>}
            <div className="todo-form">
                <TodoForm addTodo={addTodo} setError={setError} />
                <TodoList
                    todos={todos}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            </div>
        </div>
    );
}
