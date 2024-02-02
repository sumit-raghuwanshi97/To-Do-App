import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { DataFetchState } from '../../domain/data-fetch-state.entity';
import { Task } from '../../domain/interface/task';
import { fetchUserTasksThunk } from '../reducer/tasks-screen.reducer';

export interface UserTasksState {
  tasks : DataFetchState<Task[]>;
}

const initialState: UserTasksState = {
  tasks: { loading: false, data: [] },
};

export const userTasksSlice = createSlice({
  name: 'userTasks',
  initialState,
  reducers: {
    // Additional actions can be added here
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Tasks Thunk
      .addCase(fetchUserTasksThunk.pending, (state) => {
        state.tasks.loading = true;
      })
      .addCase(fetchUserTasksThunk.fulfilled, (state, action) => {
        state.tasks.loading = false;

        if (action.payload) {
          state.tasks.data = action.payload;
        }
      });
  },
});

export const { setTasks } = userTasksSlice.actions;
export default userTasksSlice.reducer;
// Action creators are generated for each case reducer function

