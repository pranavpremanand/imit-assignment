import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  comments: [],
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
      state.comments = state.comments.map((comment) => {
        if (comment.postId === action.payload.postId) {
          comment.comments = [action.payload, comment.comments];
        }
        return comment;
      });
    },
  },
});

export const { addPost, setLikedStatus, setComment } = storeSlice.actions;
export default storeSlice.reducer;
