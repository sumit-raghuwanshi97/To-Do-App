import { DataFetchState } from '../../domain/data-fetch-state.entity';
import { Task } from '../../domain/interface/task';
import { UserTasksState } from '../slice/task-screen-slice';

export const selectTasks = (state: {
 userTasks : UserTasksState
}): DataFetchState<Task[]> => state.userTasks.tasks;