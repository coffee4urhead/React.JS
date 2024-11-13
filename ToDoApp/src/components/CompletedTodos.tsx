interface CompletedTodoProps {
    completedTasks: number;
}

export default function CompletedTodo({ completedTasks }: CompletedTodoProps) {
    return (
        <h2>Completed todos: {completedTasks}</h2>
    );
}
