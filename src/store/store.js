import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./quizSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;
