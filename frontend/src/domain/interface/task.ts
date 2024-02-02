
export interface baseTask{
    description: string;
    completed: boolean;
}

export interface Task {
    id: string;
    description: string;
    completed: boolean;
}

export interface TasksFetchedResponse {
    tasks : Task[];
}
  