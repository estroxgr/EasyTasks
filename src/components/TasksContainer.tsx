import TaskItem from "./TaskItem";

import { ITask,Priority } from "../interfaces";


import { useState } from "react";


const TasksContainer = () => {

    const [tasks,setTasks] = useState<ITask[]>([]);

    return (
        <>
            <div className="list-container">
                {

                    tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} />
                    })
                }
              
            </div>
        </>
    );
}


export default TasksContainer;