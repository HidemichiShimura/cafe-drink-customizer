import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/app/hook';
import { newsListReducerActions, selectNewsList } from 'redux/feature/newsListSlice';

// custom hook which will return isFetching, newsList, fetchNewsList
const useNewsFeed = () => {
  const { isFetching, newsList } = useAppSelector(selectNewsList);
  const dispatch = useAppDispatch();

  const fetchNewsList = useCallback(
    (searchParamObj) => {
      dispatch(newsListReducerActions.fetchNewsList({ searchParamObj }));
    }, [dispatch]);


  return { isFetching, newsList, fetchNewsList };
};

export default useNewsFeed;
