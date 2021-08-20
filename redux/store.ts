import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import groupSlice from "./groupSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminSlice,
    group: groupSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// redux middleware
