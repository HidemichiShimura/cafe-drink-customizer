import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import SmapleItem from './SampleItem';
import { customizesSelector } from 'store/selectors/customizesSelector';

// no businesslogics
const Sample = () => (
  <div>

    this is sample
    <SmapleItem />
  </div>
);

// business logics here
const SampleContainer = () => {

  const customizes = useRecoilValue(customizesSelector);

  // useEffect(() => {
  //   backend.customizes.fetchCustomizes().then(res => console.log(res));
  // }, []);

  // useEffect(() => {
  //   backend.moods.fetchMoods().then(res => console.log(res));
  // }, []);

  // useEffect(() => {
  //   backend.options.fetchOptions().then(res => console.log(res));
  // });

  return (
    <Sample />
  );
};

export default SampleContainer;
