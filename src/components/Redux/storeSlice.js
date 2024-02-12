import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const storeSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts = [action.payload, ...state.posts];
    },
    setLikedStatus: (state, action) => {
      state.posts = state.posts.map((post) => {
        if (action.payload === post.id) {
          post.isLiked = !post.isLiked;
        }
        return post;
      });
    },
    setComment: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload.postId) {
          post.comments = [action.payload.comment, ...post.comments];
        }
        return post;
      });
    },
  },
});

export const { addPost, setLikedStatus, setComment } = storeSlice.actions;
export default storeSlice.reducer;
