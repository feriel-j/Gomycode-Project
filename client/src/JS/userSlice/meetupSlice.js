import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const meetAdd = createAsyncThunk("meet/add", async (meet) => {
  try {
    let result = axios.post("http://localhost:5000/meet/", meet);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const meetget = createAsyncThunk("meet/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/meet/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const meetUpDelete = createAsyncThunk("meet/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/meet/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const meetUpEdit = createAsyncThunk(
  "meet/update",
  async ({ id, meet }) => {
    try {
      let response = axios.put(`http://localhost:5000/meet/${id}`, meet);
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const participantEdit = createAsyncThunk(
  "meet/part/update",
  async ({ id, part }) => {
    try {
      let response = axios.put(`http://localhost:5000/meet/part/${id}`, part);
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const participantDelete = createAsyncThunk(
  "meet/part/delete",
  async ({ meetId, partId }) => {
    try {
      let result = axios.delete(
        `http://localhost:5000/meet/part/${meetId}/${partId}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  meet: null,
  status: null,
};
export const meetupSlice = createSlice({
  name: "meet",
  initialState,
  reducers: {},
  extraReducers: {
    [meetAdd.pending]: (state) => {
      state.status = "pending";
    },
    [meetAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [meetAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [meetget.pending]: (state) => {
      state.status = "pending";
    },
    [meetget.fulfilled]: (state, action) => {
      state.status = "success";
      state.meet = action.payload.data?.meetups;
    },
    [meetget.rejected]: (state) => {
      state.status = "fail";
    },
    [meetUpDelete.pending]: (state) => {
      state.status = "pending";
    },
    [meetUpDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [meetUpDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [meetUpEdit.pending]: (state) => {
      state.status = "pending";
    },
    [meetUpEdit.fulfilled]: (state) => {
      state.status = "success";
    },
    [meetUpEdit.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default meetupSlice.reducer;
