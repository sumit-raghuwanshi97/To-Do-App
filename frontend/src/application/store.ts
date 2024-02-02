import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userTaskReducer, { UserTasksState } from './slice/task-screen-slice';

const persistUserConfig: PersistConfig<UserTasksState, any, any, any> = {
  key: 'taskScreen',
  storage ,
  whitelist: ['/* Add relevant properties here */'],
};

const persistedTaskReducer = persistReducer(persistUserConfig, userTaskReducer);

export const store = configureStore({
  reducer: {
    taskScreen: persistedTaskReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
