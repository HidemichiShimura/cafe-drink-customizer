import { configureStore } from "@reduxjs/toolkit";
import newsListReducer from 'redux/feature/newsListSlice';

const store = configureStore({
  reducer: {
    newsList: newsListReducer,
  }
});

export { store };
