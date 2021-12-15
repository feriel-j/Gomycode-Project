import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const storyPost = createAsyncThunk("story/add", async (story) => {
  try {
    let result = axios.post("http://localhost:5000/story/", story);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const storyget = createAsyncThunk("story/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/story/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const storyDelete = createAsyncThunk("story/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/story/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const storyUpdated = createAsyncThunk(
  "story/update",
  async ({ id, story }) => {
    try {
      let response = axios.put(`http://localhost:5000/story/${id}`, story);
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  story: null,
  status: null,
};
export const storiesSlice = createSlice({
  name: "story",
  initialState,
  reducers: {},
  extraReducers: {
    [storyPost.pending]: (state) => {
      state.status = "pending";
    },
    [storyPost.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [storyPost.rejected]: (state) => {
      state.status = "fail";
    },

    [storyget.pending]: (state) => {
      state.status = "pending";
    },
    [storyget.fulfilled]: (state, action) => {
      state.status = "success";
      state.story = action.payload.data?.stories;
    },
    [storyget.rejected]: (state) => {
      state.status = "fail";
    },
    [storyDelete.pending]: (state) => {
      state.status = "pending";
    },
    [storyDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [storyDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [storyUpdated.pending]: (state) => {
      state.status = "pending";
    },
    [storyUpdated.fulfilled]: (state) => {
      state.status = "success";
    },
    [storyUpdated.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default storiesSlice.reducer;
