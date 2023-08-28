import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { alertActions } from 'stores'
import { history, fetchWrapper } from 'helpers'
import { LoginFormData } from 'types/interfaces'

// create slice
const name = 'auth'
const initialState = createInitialState()
const reducers = createReducers()
const extraActions = createExtraActions()
const slice = createSlice({ name, initialState, reducers })

// exports
export const authActions = { ...slice.actions, ...extraActions }
export const authReducer = slice.reducer

// implementation
function createInitialState() {
    const auth = localStorage.getItem('auth')
    return {
        // initialize state from local storage to enable user to stay logged in
        value: auth ? JSON.parse(auth) : ''
    }
}

function createReducers() {
    return {
        setAuth
    }

    function setAuth(state: any, action: any) {
        state.value = action.payload
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`

    return {
        login: login(),
        logout: logout()
    }

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            async function (formData: LoginFormData, { dispatch }) {
                dispatch(alertActions.clear())
                try {
                    const user = await fetchWrapper.post(`${baseUrl}/authenticate`, formData)

                    // set auth user in redux state
                    dispatch(authActions.setAuth(user))

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('auth', JSON.stringify(user))

                    // get return url from location state or default to home page
                    const { from } = history.location.state || { from: { pathname: '/' } }
                    history.navigate(from)
                } catch (error) {
                    dispatch(alertActions.error(error as never))
                }
            }
        )
    }

    function logout() {
        return createAsyncThunk(
            `${name}/logout`,
            function (arg, { dispatch }) {
                dispatch(authActions.setAuth(null as never))
                localStorage.removeItem('auth')
                history.navigate('/account/login')
            }
        )
    }
}