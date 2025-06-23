import { useRef, useState } from "react";

export default function TodoForm({ addTodo, setError }) {
    const [title, setTitle] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError("Task cannot be empty");
            return;
        }
        await addTodo(title);
        setTitle("");
        setError("");
        inputRef.current.focus();
    };

    return (
        <div className="add-todo">
            <input
                ref={inputRef}
                type="text"
                className="todo-input"
                placeholder="What is the task today?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
            />
            <button
                type="submit"
                className="add-btn"
                id="add-todo-btn"
                onClick={handleSubmit}
            >
                Add Task
            </button>
        </div>
    );
}
