import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/redux/store';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isSignedIn: false,
    },
    reducers: {
        signIn: (state) => {
            state.isSignedIn = true;
        },
        signOut: (state) => {
            state.isSignedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export const selectIsSignedIn = (state: RootState) => state.isSignedIn;
