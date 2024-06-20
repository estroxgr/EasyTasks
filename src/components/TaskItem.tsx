import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Task } from "../interfaces";


export default function TaskItem({task}: Task) {

    return (
        <>
            <div className="taskitem">
                <div className="details">
                    <div className="name">{task.name}</div>
                    <div className="priority">{task.priority}</div>
                </div>

                {/** actions */}
                <div className="buttons">
                    <div className="btn btn-delete">
                        <FiTrash2 />
                    </div>
                    <div className="btn btn-edit">
                        <FiEdit />
                    </div>
                </div>
            </div>

        </>
    );
}

