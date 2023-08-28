import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for state and payloads
interface CommonState {
  loading: number;
}

// create slice
const name = 'common';
const initialState: CommonState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

// exports
export const commonActions = slice.actions;
export const commonReducer = slice.reducer;

// implementation
function createInitialState(): CommonState {
  return {
    loading: 0,
  };
}

function createReducers() {
  return {
    setLoading
  };

  function setLoading(state: CommonState, action: PayloadAction<boolean>) {
    console.log('state.loading', state.loading)
    console.log('action.payload', action.payload)
    state.loading = action.payload ? state.loading + 1 : (state.loading > 1 ? state.loading - 1 : 0);
  }
}
