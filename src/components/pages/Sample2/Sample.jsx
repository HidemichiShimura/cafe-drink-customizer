import React, { useEffect } from 'react';
import useCustomizes from 'hooks/useCustomizes';

// no businesslogics
const Sample = ({ isFetching, newsLis }) => (
  <div>
    {isFetching && (<>...Loading</>)}
    {newsLis && { newsLis }}
    this is sample
  </div>
);

// business logics here
const SampleContainer = () => {
  const { isFetching, newsList, fetchNewsList } = useCustomizes();

  useEffect(() => {
    fetchNewsList({ 'sampleKey': 'sample' });
  }, []);

  return <Sample isFetching={isFetching} newsList={newsList} />;
};

export default SampleContainer;
