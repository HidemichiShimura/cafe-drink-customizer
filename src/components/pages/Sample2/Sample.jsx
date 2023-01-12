import React, {useEffect} from 'react';
import useNewsFeed from 'hooks/useNewsFeed';

// no businesslogics
const Sample = ({isFetching, newsLis}) => (
  <div>
    {isFetching && (<>...Loading</>)}
    {newsLis && {newsLis}}
    this is sample
  </div>
);

// business logics here
const SampleContainer = () => {
  const { isFetching, newsList, fetchNewsList } = useNewsFeed();

  useEffect(() => {
    fetchNewsList({'sampleKey': 'sample'});
  }, []);

  return <Sample isFetching={isFetching} newsList={newsList} />;
};

export default SampleContainer;
