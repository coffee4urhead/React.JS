import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import AddTask from './AddTask';

export default function App() {
    const [totalTasks, setTotalTasks] = useState(0);
    const [completedTasks, setCompletedTasks] = useState(0);
    const [tasks, setTasks] = useState<{ id: number; text: string }[]>([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem("taskList");
        const storedTotalTasks = localStorage.getItem("totalTasksSave");
        const storedCompletedTasks = localStorage.getItem("completedTasksSave");

        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
        if (storedTotalTasks) {
            setTotalTasks(parseInt(storedTotalTasks, 10));
        }
        if (storedCompletedTasks) {
            setCompletedTasks(parseInt(storedCompletedTasks, 10));
        }
    }, []);

    const handleAddTask = (taskText: string) => {
        const newTasks = [...tasks, { id: Date.now(), text: taskText }];
        setTasks(newTasks);
        setTotalTasks(totalTasks + 1);

        localStorage.setItem("taskList", JSON.stringify(newTasks));
        localStorage.setItem("totalTasksSave", (totalTasks + 1).toString());
    };

    const handleDeleteTask = (id: number) => {
        const remainingTasks = tasks.filter(task => task.id !== id);
        setTasks(remainingTasks);
        setCompletedTasks(completedTasks + 1);

        localStorage.setItem("taskList", JSON.stringify(remainingTasks));
        localStorage.setItem("completedTasksSave", (completedTasks + 1).toString());
    };

    return (
        <>
            <Header />
            <AddTask 
                tasks={tasks} 
                onAddTask={handleAddTask} 
                onDeleteTask={handleDeleteTask} 
            />
            <Footer totalTasks={totalTasks} completedTasks={completedTasks} />
        </>
    );
}
