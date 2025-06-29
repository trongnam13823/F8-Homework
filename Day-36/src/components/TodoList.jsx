import TodoItem from "./TodoItem";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}
