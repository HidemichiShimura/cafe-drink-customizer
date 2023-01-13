import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsListReducerActions, selectNewsList } from 'redux/feature/newsListSlice';

// custom hook which will return isFetching, newsList, fetchNewsList
const useNewsFeed = () => {
  const { isFetching, newsList } = useSelector(selectNewsList);
  const dispatch = useDispatch();

  const fetchNewsList = useCallback(
    (searchParamObj) => {
      dispatch(newsListReducerActions.fetchNewsList({ searchParamObj }));
    }, [dispatch]);


  return { isFetching, newsList, fetchNewsList };
};

export default useNewsFeed;
