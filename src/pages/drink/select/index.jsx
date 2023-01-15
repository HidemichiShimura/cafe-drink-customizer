import React from 'react';
import { useState } from 'react';

import { backend } from '@/repositories';

const MoodPage = ({ moods, handleMoodClick }) => (
  <div>
    {
      moods.map(mood => 
        <TempMoodButton 
          key={mood.id}
          mood={mood}
          handleMoodClick={handleMoodClick}
          />
      )
    }
   
  </div>
);

const TempMoodButton = ({ mood: { id, moodName }, handleMoodClick }) => (    
  <button 
    type="button" 
    onClick={() => handleMoodClick(id)}
    >
    {moodName}
  </button>
);

const MoodPageContainer = ({ customizes, moods }) => {
  console.log(customizes, moods);
  const [currMoodId, setCurrMoodId] = useState('');

  const handleMoodClick = (id) => {
    setCurrMoodId(id);
  };

  return (
    <MoodPage 
      moods={
        moods?.length
          ? moods
          :[]
      }
      handleMoodClick={handleMoodClick}
      />);
};

export const getStaticProps = async () => {
  const customizes = await backend.customizes.fetchCustomizes();
  const moods = await backend.moods.fetchMoods();

  return {
    props: { customizes, moods }
  };
};
  

export default MoodPageContainer;
