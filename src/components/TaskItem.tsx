import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function TaskItem(task:any) {

    return (
        <>
            <div className="taskitem">
                <div className="details">
                    <div className="name">MAke a Toast</div>
                    <div className="priority">Urgent</div>
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

