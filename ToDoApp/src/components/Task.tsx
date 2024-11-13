import "./Task.css"

interface TaskProps {
    task: string;
    onDelete: () => void;
}

export default function Task(task: TaskProps) {
    return (
        <>
        <div className="task">
            <h3>{task.task}</h3>
            <button className="task-complete-btn" onClick={task.onDelete}>X</button>
        </div>
        </>
    )
}