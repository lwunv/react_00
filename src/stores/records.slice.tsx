import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchWrapper } from 'helpers';

// Create types for state, payloads, and thunks
interface RecordState {
  list: { loading?: boolean; value?: any[]; error?: any };
  item: { loading?: boolean; value?: any; error?: any };
  more: boolean;
}

interface GetAllQuery {
  page: number;
  type: number;
}

interface GetByIdPayload {
  id: number;
}

type ThunkApiConfig = {
  rejectValue: { error: any };
};

// create slice
const name = 'records';
const initialState: RecordState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers } as any);

// exports
export const recordActions = { ...slice.actions, ...extraActions };
export const recordsReducer = slice.reducer;

// implementation
function createInitialState(): RecordState {
  return {
    list: {},
    item: {},
    more: true,
  };
}

function createExtraActions() {
  const baseUrl = `${process.env.REACT_APP_API_URL}/records`;

  return {
    getAll: getAll(),
    getById: getById(),
  };

  function getAll() {
    return createAsyncThunk<any[], GetAllQuery, ThunkApiConfig>(
      `${name}/getAll`,
      async (query: any) => await fetchWrapper.get(baseUrl + `/page/${query.page}/type/${query.type}`)
    );
  }

  function getById() {
    return createAsyncThunk<any, GetByIdPayload, ThunkApiConfig>(
      `${name}/getById`,
      async (payload) => await fetchWrapper.get(`${baseUrl}/${payload.id}`)
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
        .addCase(pending, (state: RecordState) => {
          state.list = { loading: true, value: state.list?.value };
        })
        .addCase(fulfilled, (state: RecordState, action: { payload: any }) => {
          state.more = action.payload.data.length === 8;
          const xxx = state?.list?.value || [];
          action.payload.page === 1
            ? (state.list = { value: action.payload.data })
            : (state.list = { value: [...xxx, ...action.payload.data] });
        })
        .addCase(rejected, (state: RecordState, action: { error: any }) => {
          state.list = { error: action.error };
        });
    }

    function getById() {
      const { pending, fulfilled, rejected } = extraActions.getById;
      builder
        .addCase(pending, (state: RecordState) => {
          state.item = { loading: true };
        })
        .addCase(fulfilled, (state: RecordState, action: { payload: any }) => {
          state.item = { value: action.payload };
        })
        .addCase(rejected, (state: RecordState, action: { error: any }) => {
          state.item = { error: action.error };
        });
    }
  };
}
