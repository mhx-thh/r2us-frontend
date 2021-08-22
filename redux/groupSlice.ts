import {
  createAsyncThunk,
  createSlice,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { RootState } from "./store";
import GroupAPI from "api/groupAPI";

type GroupState = {
  group: any;
  // status: "done" | "loading" | "error";
};

const groupsAdapter = createEntityAdapter<GroupState>({
  selectId: (group) => group.group.data?.data?.slug,
});

export const getInfoAsync = createAsyncThunk(
  "group/getinfo",
  async (slug: string, { rejectWithValue }) => {
    try {
      const response = await GroupAPI.getGroup(slug);
      return {
        group: response.data.data,
        slug: slug,
      };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const groupSlice = createSlice({
  name: "group",
  initialState: groupsAdapter.getInitialState({ status: "done" }),

  reducers: {
    groupAdded: groupsAdapter.addOne,
    groupsReceived(state, action) {
      groupsAdapter.setAll(state, action.payload.groups);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getInfoAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInfoAsync.fulfilled, (state, action) => {
        state.status = "done";
        groupsAdapter.setAll(state, action.payload.group);
      })
      .addCase(getInfoAsync.rejected, (state, action) => {
        state.status = "error";
        Swal.fire({
          timer: 2000,
          icon: "warning",
          title: "Lấy thông tin thất bại",
          text: action.payload.toString(), // Error text
        });
      });
  },
});

export const { groupAdded, groupsReceived } = groupSlice.actions;

export const selectGroup = groupsAdapter.getSelectors<RootState>(
  (state) => state.group
);

export default groupSlice.reducer;
