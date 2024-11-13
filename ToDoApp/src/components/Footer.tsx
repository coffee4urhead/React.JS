import TotalTodo from "./TotalTodos"
import CompletedTodo from "./CompletedTodos"
import "./footer.css"


interface FooterProps {
    totalTasks: number;
    completedTasks: number;
}

export default function Footer (props: FooterProps) {
    return (
        <>
        <footer id="foot-sect">
        <TotalTodo totalTasks={props.totalTasks}></TotalTodo>
        <CompletedTodo completedTasks={props.completedTasks}></CompletedTodo>
        </footer>
        </>
    )
}