import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    status: 'checking', // checking not-authenticated, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (_, { payload }) => {

            return {
                ...payload,
                status: 'authenticated',
                errorMessage: null
            }

        },
        logout: (_, { payload }) => {

            return  {
                ...initialState,
                status: 'not-authenticated',
                errorMessage: payload?.errorMessage
            }
        },
        checkingCredential: (state) => {
            state.status = 'checking'
        },
        resetState: () => {
            return {
                ...initialState,
                status: 'not-authenticated'
            };
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential, resetState } = authSlice.actions