type TodoListPropsTypes = {
    data : {
        title: string,
        tasks: TasksTypes[],
        students: string[]
    }
}

type TasksTypes = {
    title: string,
    taskId: number,
    isDone: boolean
}
export const TodoList = (props: TodoListPropsTypes) => {

    return (
        <div>
            <h3>{props.data.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.data.tasks.map(el => {
                    return (
                        <li key={el.taskId}><input type={'checkbox'} checked={el.isDone}/><span>{el.title}</span></li>
                    )
                })}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
            <ul>
                {props.data.students.map(el => {
                    return (
                        <li key={el}>{el}</li>
                    )
                })}
            </ul>
        </div>
    )
}