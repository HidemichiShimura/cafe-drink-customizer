import React, { useEffect } from 'react';
import useNewsFeed from 'hooks/useNewsFeed';
import SmapleItem from './SampleItem';
import { backend } from 'repositories';

// no businesslogics
const Sample = ({ isFetching, newsLis }) => (
  <div>
    {isFetching && (<>...Loading</>)}
    {newsLis && { newsLis }}
    this is sample
    <SmapleItem />
  </div>
);

// business logics here
const SampleContainer = () => {
  const { isFetching, newsList, fetchNewsList } = useNewsFeed();

  useEffect(() => {
    backend.customizes.fetchCustomizes().then(res => console.log(res));
  }, []);

  useEffect(() => {
    backend.feelings.fetchFeelings().then(res => console.log(res));
  }, []);

  useEffect(() => {
    backend.options.fetchOptions().then(res => console.log(res));
  });

  return <Sample isFetching={isFetching} newsList={newsList} />;
};

export default SampleContainer;
