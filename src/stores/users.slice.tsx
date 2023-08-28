import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWrapper } from 'helpers';

// Define types for state and payloads
interface UserState {
  list: any | null;
  item: any | null;
}

interface User {
  // Define the properties for the user object used in the register action
  // Adjust these types based on your API response structure
  username: string;
  password: string;
  // Add more properties if necessary
}

// Create async thunk types
type ThunkApiConfig = {
  rejectValue: { error: any };
};

// create slice
const name = 'users';
const initialState: UserState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers } as any);

// exports
export const userActions = { ...slice.actions, ...extraActions };
export const usersReducer = slice.reducer;

// implementation
function createInitialState(): UserState {
  return {
    list: null,
    item: null,
  };
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

  return {
    register: register(),
    getAll: getAll(),
    getById: getById(),
  };

  function register() {
    return createAsyncThunk<any, User, ThunkApiConfig>(
      `${name}/register`,
      async (user) => await fetchWrapper.post(`${baseUrl}/register`, user)
    );
  }

  function getAll() {
    return createAsyncThunk<any, void, ThunkApiConfig>(
      `${name}/getAll`,
      async () => await fetchWrapper.get(baseUrl)
    );
  }

  function getById() {
    return createAsyncThunk<any, number, ThunkApiConfig>(
      `${name}/getById`,
      async (id) => await fetchWrapper.get(`${baseUrl}/${id}`)
    );
  }
}

function createExtraReducers() {
  return (builder: any) => {
    getAll();
    getById();

    function getAll() {
      const { pending, fulfilled, rejected } = extraActions.getAll;
      builder
        .addCase(pending, (state: UserState) => {
          state.list = { loading: true };
        })
        .addCase(fulfilled, (state: UserState, action: PayloadAction<any>) => {
          state.list = { value: action.payload };
        })
        .addCase(rejected, (state: UserState, action: PayloadAction<any>) => {
          state.list = { error: action.payload.error };
        });
    }

    function getById() {
      const { pending, fulfilled, rejected } = extraActions.getById;
      builder
        .addCase(pending, (state: UserState) => {
          state.item = { loading: true };
        })
        .addCase(fulfilled, (state: UserState, action: PayloadAction<any>) => {
          state.item = { value: action.payload };
        })
        .addCase(rejected, (state: UserState, action: PayloadAction<any>) => {
          state.item = { error: action.payload.error };
        });
    }
  };
}
