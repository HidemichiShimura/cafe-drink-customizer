import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';

import { backend } from '@/repositories';

const MoodPage = ({ 
  moods, 
  handleMoodClick,
  selectedMoodId
}) => (
  <div>
    {
      moods.map(mood => 
        <TempMoodButton 
          key={mood.id}
          mood={mood}
          handleMoodClick={handleMoodClick}
          isSelected={mood.id === selectedMoodId}
          />
      )
    }
    <TempCustomSelected selectedMoodId={selectedMoodId} />
  </div>
);

const TempMoodButton = ({ 
  mood: { id, moodName }, 
  handleMoodClick,
  isSelected
}) => (    
  <button 
    type="button" 
    onClick={() => handleMoodClick(id)}
    >
    {moodName} {isSelected && 'selected'}
  </button>
);

const TempCustomSelected = ({ selectedMoodId }) => (
  <div>{selectedMoodId}</div>
);

const MoodPageContainer = ({ customDrinks, moods }) => {
  console.log(customDrinks, moods);
  const [currMoodId, setCurrMoodId] = useState('');

  console.log(currMoodId);

  const handleMoodClick = useCallback((id) => {
    setCurrMoodId(id);
  }, []);

  const filteredDrinks = useMemo(() => {
    if (!customDrinks?.length) return [];
    return customDrinks.filter(cd => cd.moodId === currMoodId);
  }, [currMoodId, customDrinks]);

  console.log(filteredDrinks);

  return (
    <MoodPage 
      moods={
        moods?.length
          ? moods
          :[]
      }
      handleMoodClick={handleMoodClick}
      selectedMoodId={currMoodId}
      />);
};

export const getStaticProps = async () => {
  const customDrinks = await backend.customizes.fetchCustomizes();
  const moods = await backend.moods.fetchMoods();

  return {
    props: { customDrinks, moods }
  };
};
  

export default MoodPageContainer;
