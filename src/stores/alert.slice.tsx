import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define types for state and payloads
interface AlertState {
  value: AlertMessage | null;
}

interface AlertMessage {
  type: 'alert-success' | 'alert-danger';
  message: string;
  showAfterRedirect?: boolean;
}

// create slice
const name = 'alert';
const initialState: AlertState = createInitialState();
const reducers = createReducers();
const slice = createSlice({ name, initialState, reducers });

// exports
export const alertActions = slice.actions;
export const alertReducer = slice.reducer;

// implementation
function createInitialState(): AlertState {
  return {
    value: null,
  };
}

function createReducers() {
  return {
    success,
    error,
    clear,
  };

  function success(state: AlertState, action: PayloadAction<AlertMessage>) {
    state.value = {
      type: 'alert-success',
      message: action.payload.message,
      showAfterRedirect: action.payload.showAfterRedirect,
    };
  }

  function error(state: AlertState, action: PayloadAction<AlertMessage>) {
    state.value = {
      type: 'alert-danger',
      message: action.payload.message,
      showAfterRedirect: action.payload.showAfterRedirect,
    };
  }

  function clear(state: AlertState) {
    if (state.value?.showAfterRedirect) {
      state.value.showAfterRedirect = false;
    } else {
      state.value = null;
    }
  }
}
