import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/axiosInstance";

const retryWithBackoff = async (dispatch, actionCreator) => {
  try {
    const result = await dispatch(actionCreator());
    return result.payload;
  } catch (error) {
    throw error;
  }
};

export const fetchQuiz = createAsyncThunk(
  "quiz/fetchQuiz",
  async (totalQuiz, thunkApi) => {
    try {
      const url = `?amount=${totalQuiz}`;
      const response = await axiosInstance.get(url);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429) {
        console.log(`Too many requests. Retrying in 5 seconds...`);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const result = await retryWithBackoff(thunkApi.dispatch, fetchQuiz);
        return result;
      } else {
        throw error;
      }
    }
  }
);
const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    isLoaded: false,
    quiz: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state) => {
        state.isLoaded = false;
        state.quiz = null;
        state.error = null;
      })
      .addCase(fetchQuiz.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.quiz = action.payload;
        state.error = null;
      })
      .addCase(fetchQuiz.rejected, (state, action) => {
        state.isLoaded = false;
        state.quiz = null;
        state.error = action.error.message;
      });
  },
});

export default quizSlice.reducer;
