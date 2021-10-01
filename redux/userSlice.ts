import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { RootState, AppThunk } from "./store";
import userApi from "api/userApi";

export interface UserState {
  user: any;
  token: string;
  status: "logined" | "nologin" | "loading";
}

const initialState: UserState = {
  user: {},
  token: "",
  status: "nologin",
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getInfoAsync = createAsyncThunk(
  "user/getinfo",
  async (token: string, { rejectWithValue }) => {
    try {
      const response = await userApi.getInfo(token);
      return {
        user: response.data.data,
        token: token,
      };
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    logout: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state = initialState;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    initToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getInfoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInfoAsync.fulfilled, (state, action) => {
        state.status = "logined";
        state.user = action.payload.user;
        state.token = action.payload.token;
      });
  },
});

export const { logout, initToken } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectToken = (state: RootState) => state.user.token;
export const selectUser = (state: RootState) => state.user.user;
export const selectStatus = (state: RootState) => state.user.status;
export const selectIsAdmin = function (state: RootState) {
  return state.user.user?.role === "admin";
};

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const getInfoIfToken = (): AppThunk => (dispatch, getState) => {
  const currentValue = selectToken(getState());
  if (currentValue) {
    dispatch(getInfoAsync(currentValue));
  }
  Swal.fire({
    timer: 2000,
    icon: "warning",
    title: "Bạn chưa đăng nhập",
  });
};

export default userSlice.reducer;
