import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const postAdd = createAsyncThunk("story/add", async (post) => {
  try {
    let result = axios.post("http://localhost:5000/post/", post);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const postGet = createAsyncThunk("post/get", async () => {
  try {
    let result = axios.get("http://localhost:5000/post/");
    return result;
  } catch (error) {
    console.log(error);
  }
});

export const postDelete = createAsyncThunk("post/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/post/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const postUpdate = createAsyncThunk(
  "post/update",
  async ({ id, post }) => {
    try {
      let response = await axios.put(`http://localhost:5000/post/${id}`, post);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentAdd = createAsyncThunk(
  "post/comment/add",
  async ({ postId, userid, post }) => {
    try {
      let result = axios.post(
        `http://localhost:5000/post/comment/${postId}/${userid}`,
        post
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);
export const commentDelete = createAsyncThunk(
  "post/comment/delete",
  async ({ postId, commentId, userid }) => {
    try {
      let result = axios.delete(
        `http://localhost:5000/post/comment/${postId}/${commentId}/${userid}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addLike = createAsyncThunk(
  "like/add",
  async ({ postId, userid }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/post/like/${postId}/${userid}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteLike = createAsyncThunk(
  "post/unlike/del",
  async ({ postId, userid }) => {
    try {
      let result = await axios.put(
        `http://localhost:5000/post/unlike/${postId}/${userid}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  post: null,
  status: null,
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [postAdd.pending]: (state) => {
      state.status = "pending";
    },
    [postAdd.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [postAdd.rejected]: (state) => {
      state.status = "fail";
    },

    [postGet.pending]: (state) => {
      state.status = "pending";
    },
    [postGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.post = action.payload.data?.posts;
    },
    [postGet.rejected]: (state) => {
      state.status = "fail";
    },
    [postDelete.pending]: (state) => {
      state.status = "pending";
    },
    [postDelete.fulfilled]: (state) => {
      state.status = "success";
    },
    [postDelete.rejected]: (state) => {
      state.status = "fail";
    },
    [postUpdate.pending]: (state) => {
      state.status = "pending";
    },
    [postUpdate.fulfilled]: (state) => {
      state.status = "success";
    },
    [postUpdate.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
// export const { logout } = storiesSlice.actions;

export default postSlice.reducer;
