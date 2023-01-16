import React, { useCallback, useMemo } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { backend } from '@/repositories';
import { MoodSelectionLayout, MoodSelectionItem } from '@/components/pages/Mood';
import { routes } from '@/utils/routes';

const MoodPage = ({ 
  moods, 
  selectedMoodId,
  selectedMoodName,
  filteredDrinks,
  handleMoodClick,
  handleDrinkCustomClick
}) => (
  <>
    <MoodSelectionLayout title={'Mood'}>
      {
        moods.map(mood => 
          <MoodSelectionItem 
            key={mood.id}
            id={mood.id}
            name={mood.moodName}
            handleItemClick={handleMoodClick}
            isSelected={mood.id === selectedMoodId}
            />
        )
      }
    </MoodSelectionLayout>

    <MoodSelectionLayout title={selectedMoodName}>
      {
        filteredDrinks.length ? (
          filteredDrinks.map(filteredDrink =>
            <MoodSelectionItem 
              key={filteredDrink.id}
              id={filteredDrink.id}
              name={filteredDrink.title}
              handleItemClick={handleDrinkCustomClick}
              />
          )
        )
          : <p>No Items Found</p>
        
      }
    </MoodSelectionLayout>
  </>
);


const MoodPageContainer = ({ customDrinks, moods }) => {
  const router = useRouter();
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodClick = useCallback((id) => {
    const itemIdx = moods.findIndex(mood => mood.id === id);
    if (itemIdx === -1) return;
    setSelectedMood(moods[itemIdx]);
  }, [moods]);

  const handleDrinkCustomClick = useCallback((id) => {
    router.push(`${routes.customizePage}${id}`);
  }, [router]);

  const filteredDrinks = useMemo(() => {
    if (!customDrinks?.length) return [];
    return customDrinks.filter(cd => cd.moodId === selectedMood?.id);
  }, [selectedMood, customDrinks]);

  return (
    <MoodPage 
      moods={
        moods?.length
          ? moods
          :[]
      }
      selectedMoodId={selectedMood?.id ?? ''}
      selectedMoodName={selectedMood?.moodName ?? ''}
      filteredDrinks={filteredDrinks}
      handleMoodClick={handleMoodClick}
      handleDrinkCustomClick={handleDrinkCustomClick}
      />);
};

export const getStaticProps = async () => {
  const customDrinks = await backend.customDrinks.fetchCustomDrinks();
  const moods = await backend.moods.fetchMoods();

  return {
    props: { customDrinks, moods }
  };
};
  

export default MoodPageContainer;
