import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from '~/redux/slices/authSlice';

const store = configureStore({
    reducer: authSlice.reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export { store };
