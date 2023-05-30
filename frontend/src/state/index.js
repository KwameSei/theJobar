import { createSlice } from "@reduxjs/toolkit";

const initialState = {  // initial state of the app 
  mode: "light",  // light mode is default
  user: null, // user is null by default
  token: null,
  posts: []
}

export const authSlice = createSlice({ // createSlice is a function that takes an object as an argument
  name: "auth", // name of the slice
  initialState,
  reducers: {
    setMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark"
      } else {
        state.mode = "light"
      }
    },
    setLogin: (state, action) => {
      state.user = action.payload.user; // payload is the data that is passed to the action
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setConnections: (state, action) => {
      if (state.user) {
        state.user.connections = action.payload.connections;
      } else {
        console.log("No user found");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) {
          return action.payload.post;
        } else {
          return post;
        }
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setConnections, setPosts, setPost } = authSlice.actions;

export const selectMode = (state) => state.auth.mode;
export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectPosts = (state) => state.auth.posts;

export default authSlice.reducer;