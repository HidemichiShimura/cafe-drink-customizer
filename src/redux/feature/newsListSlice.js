import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { backend } from 'repositories';

const initialState = {
  isFetching: false,
  newsList: null,
  isSearchFormOpen: false,
  error: null,
};


const fetchNewsList = createAsyncThunk(
  'newsList/FetchNewsList', // add name by yourself {slicename/fetch function name}
  async ({ searchParamObj }) => {
    const res = await backend.news.fetchNews(searchParamObj);
    return { newsList: res.articles };
  }
);

export const newsListSlice = createSlice({
  name: 'newsList',
  initialState,
  reducers: {
    toggleSearchForm: (state) => {
      state.isSearchFormOpen = !state.isSearchFormOpen;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsList.pending, (state) => {
        state.isFetching = true;
        state.newsList = [];
        state.error = null;
        state.isSearchFormOpen = false;
      })
      .addCase(fetchNewsList.fulfilled, (state, action) => {
        state.isFetching = false;
        state.newsList = action.payload.newsList;
      })
      .addCase(fetchNewsList.rejected, (state, action) => {
        state.isFetching = false;
        state.error = action.error;
      });
  }
});

const selectNewsList = (state) => state.newsListState;

const { toggleSearchForm } = newsListSlice.actions;
const newsListReducerActions = { fetchNewsList, toggleSearchForm };
export { selectNewsList, newsListReducerActions };
export default newsListSlice.reducer;