import React, { useState } from "react";
import "./AddTask.css";
import Task from "./Task";

interface AddTaskProps {
    tasks: { id: number; text: string }[];
    onAddTask: (taskText: string) => void;
    onDeleteTask: (id: number) => void;
}

export default function AddTask({ tasks, onAddTask, onDeleteTask }: AddTaskProps) {
    const [taskText, setTaskText] = useState("");

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedTaskText = taskText.trim();
        if (trimmedTaskText) {
            onAddTask(trimmedTaskText);
            setTaskText(""); 
        }
    };

    return (
        <div id="task-add-cont">
            <form id="form-cont" onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="taskInput"
                    placeholder="Add some task to complete..."
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>

            <ul id="added-tasks">
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task
                            task={task.text}
                            onDelete={() => onDeleteTask(task.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
