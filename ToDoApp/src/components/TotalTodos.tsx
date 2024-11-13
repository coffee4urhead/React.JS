interface TotalTodoProps {
    totalTasks: number;
}

export default function TotalTodo({ totalTasks }: TotalTodoProps) {
    return (
        <h2>Total todos: {totalTasks}</h2>
    );
}
