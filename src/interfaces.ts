export enum Priority {
    NORMAL="Normal",
    HIGH="High",
    URGENT="Urgent"
}

export interface ITask {
    id:number;
    name:string;
    isDone:boolean;
    priority:Priority;
}

export interface Task {
    task:ITask
}