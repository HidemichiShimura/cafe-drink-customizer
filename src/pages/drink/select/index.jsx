import { useRouter } from 'next/router'
import React, { useCallback, useMemo, useState } from 'react'
import { MoodSelectionLayout, MoodSelectionItem } from '@/components'
import { backend } from '@/repositories'
import { food } from '@/utils/imageConstants'
import { routes } from '@/utils/routes'

const MoodPage = ({
  moods,
  selectedMoodId,
  selectedMoodName,
  filteredDrinks,
  handleMoodClick,
  handleDrinkCustomClick,
}) => (
  <>
    <MoodSelectionLayout title={'Mood'}>
      {moods.map(({ id, moodName }) => (
        <MoodSelectionItem
          key={id}
          id={id}
          name={moodName}
          iconName={food.blackberry}
          handleItemClick={handleMoodClick}
          isSelected={id === selectedMoodId}
        />
      ))}
    </MoodSelectionLayout>

    <MoodSelectionLayout title={selectedMoodName}>
      {filteredDrinks.length ? (
        filteredDrinks.map(({ id, title, iconName }) => (
          <MoodSelectionItem
            key={id}
            id={id}
            name={title}
            iconName={iconName}
            handleItemClick={handleDrinkCustomClick}
          />
        ))
      ) : (
        <p>No Items Found</p>
      )}
    </MoodSelectionLayout>
  </>
)

const MoodPageContainer = ({ customDrinks, moods }) => {
  const router = useRouter()
  const [selectedMood, setSelectedMood] = useState(null)

  const handleMoodClick = useCallback(
    (id) => {
      const itemIdx = moods.findIndex((mood) => mood.id === id)
      if (itemIdx === -1) return
      setSelectedMood(moods[itemIdx])
    },
    [moods],
  )

  const handleDrinkCustomClick = useCallback(
    (id) => {
      router.push(`${routes.customizePage}${id}`)
    },
    [router],
  )

  const filteredDrinks = useMemo(() => {
    if (!customDrinks?.length) return []
    return customDrinks.filter((cd) => cd.moodId === selectedMood?.id)
  }, [selectedMood, customDrinks])

  return (
    <MoodPage
      moods={moods?.length ? moods : []}
      selectedMoodId={selectedMood?.id ?? ''}
      selectedMoodName={selectedMood?.moodName ?? ''}
      filteredDrinks={filteredDrinks}
      handleMoodClick={handleMoodClick}
      handleDrinkCustomClick={handleDrinkCustomClick}
    />
  )
}

export const getStaticProps = async () => {
  const customDrinks = await backend.customDrinks.fetchCustomDrinks()
  const moods = await backend.moods.fetchMoods()

  return {
    props: { customDrinks, moods },
  }
}

export default MoodPageContainer
