import { useState } from "react";

export default function TodoItem({ todo, updateTodo, deleteTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleToggleComplete = () => {
        updateTodo(todo.id, { completed: !todo.completed });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (!editTitle.trim()) {
            setEditTitle(todo.title);
            setIsEditing(false);
            return;
        }
        await updateTodo(todo.id, { title: editTitle });
        setIsEditing(false);
    };

    const handleDelete = () => {
        deleteTodo(todo.id);
    };

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleComplete}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onBlur={handleSave}
                    onKeyPress={(e) => e.key === "Enter" && handleSave()}
                    autoFocus
                />
            ) : (
                <div
                    className={`todo-content ${
                        todo.completed ? "completed" : ""
                    }`}
                >
                    {todo.title}
                </div>
            )}
            <button
                className="edit-btn fa-solid fa-pen-to-square"
                onClick={isEditing ? handleSave : handleEdit}
            ></button>
            <button
                className="del-btn fa-solid fa-trash"
                onClick={handleDelete}
            ></button>
        </div>
    );
}
