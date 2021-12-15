import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk("user/register", async (user) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/user/register",
      user
    );
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk("user/login", async (user) => {
  try {
    let response = await axios.post("http://localhost:5000/user/login", user);
    return await response;
  } catch (error) {
    console.log(error);
  }
});
export const userCurrent = createAsyncThunk("user/current", async () => {
  try {
    let response = await axios.get("http://localhost:5000/user/current", {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    return await response;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "user/update",
  async ({ id, user }) => {
    try {
      let response = await axios.put(`http://localhost:5000/user/${id}`, user);
      console.log(user);
      return await response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const usersGet = createAsyncThunk("user/get", async () => {
  try {
    let response = axios.get("http://localhost:5000/user/");
    return response;
  } catch (error) {
    console.log(error);
  }
});
export const usersDel = createAsyncThunk("user/delete", async (id) => {
  try {
    let result = axios.delete(`http://localhost:5000/user/${id}`);
    return result;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  user: null,
  status: null,
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.status = "pending";
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.newUserToken;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userRegister.rejected]: (state) => {
      state.status = "fail";
    },
    [userLogin.pending]: (state) => {
      state.status = "pending";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload.data.user;
      localStorage.setItem("token", action.payload.data.token);
    },
    [userLogin.rejected]: (state) => {
      state.status = "fail";
    },
    [userCurrent.pending]: (state) => {
      state.status = "pending";
    },
    [userCurrent.fulfilled]: (state, action) => {
      state.status = "succcessssss";
      state.user = action.payload?.data.user;
    },
    [userCurrent.rejected]: (state) => {
      state.status = "fail";
    },
    [updateUser.pending]: (state) => {
      state.status = "pending";
    },
    [updateUser.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [updateUser.rejected]: (state) => {
      state.status = "fail";
    },
    [usersGet.pending]: (state) => {
      state.status = "pending";
    },
    [usersGet.fulfilled]: (state, action) => {
      state.status = "success";
      state.users = action.payload.data?.users;
    },
    [usersGet.rejected]: (state) => {
      state.status = "fail";
    },
    [usersDel.pending]: (state) => {
      state.status = "pending";
    },
    [usersDel.fulfilled]: (state) => {
      state.status = "succcessssss";
    },
    [usersDel.rejected]: (state) => {
      state.status = "fail";
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions;

export default userSlice.reducer;
