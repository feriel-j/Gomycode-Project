import { configureStore } from "@reduxjs/toolkit";
import meetupSlice from "./userSlice/meetupSlice";
import storiesSlice from "./userSlice/storiesSlice";
import userSlice from "./userSlice/userSlice";
import postSlice from "./userSlice/postSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    story: storiesSlice,
    post: postSlice,
    meet: meetupSlice,
  },
});
