import { configureStore } from "@reduxjs/toolkit";
import newsListReducer from 'redux/feature/newsListSlice';

const store = configureStore({
  reducer: {
    newsListState: newsListReducer,
  }
});

export { store };
