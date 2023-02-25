import { useRouter } from 'next/router'
import React, { useCallback, useMemo, useState } from 'react'
// @ts-expect-error TS(2307): Cannot find module 'components' or its correspondi... Remove this comment to see the full error message
import { MoodSelectionLayout, MoodSelectionItem, PageLayout } from 'components'
// @ts-expect-error TS(2307): Cannot find module 'repositories' or its correspon... Remove this comment to see the full error message
import { backend } from 'repositories'
// @ts-expect-error TS(2307): Cannot find module 'utils/routes' or its correspon... Remove this comment to see the full error message
import { routes } from 'utils/routes'

const MoodPage = ({
  moods,
  selectedMoodId,
  selectedMoodName,
  filteredDrinks,
  handleMoodClick,
  handleDrinkCustomClick
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MoodSelectionLayout title={'Mood'}>
      {moods.map(({
        id,
        moodName
      }: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <MoodSelectionItem
          key={id}
          id={id}
          name={moodName}
          iconName={moodName}
          isMood
          handleItemClick={handleMoodClick}
          isSelected={id === selectedMoodId}
        />
      ))}
    </MoodSelectionLayout>

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <MoodSelectionLayout title={selectedMoodName}>
      {filteredDrinks.length ? (
        filteredDrinks.map(({
          id,
          title,
          iconName
        }: any) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <MoodSelectionItem
            key={id}
            id={id}
            name={title}
            iconName={iconName}
            handleItemClick={handleDrinkCustomClick}
          />
        ))
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p>No Items Found</p>
      )}
    </MoodSelectionLayout>
  </div>
)

const MoodPageContainer = ({
  customDrinks,
  moods
}: any) => {
  const router = useRouter()
  const [selectedMood, setSelectedMood] = useState(null)

  const handleMoodClick = useCallback(
    (id: any) => {
      const itemIdx = moods.findIndex((mood: any) => mood.id === id)
      if (itemIdx === -1) return
      setSelectedMood(moods[itemIdx])
    },
    [moods],
  )

  const handleDrinkCustomClick = useCallback(
    (id: any) => {
      router.push(`${routes.customizePage}${id}`)
    },
    [router],
  )

  const filteredDrinks = useMemo(() => {
    if (!customDrinks?.length) return []
    // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
    return customDrinks.filter((cd: any) => cd.moodId === selectedMood?.id);
  }, [selectedMood, customDrinks])

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <PageLayout>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <MoodPage
        moods={moods?.length ? moods : []}
        // @ts-expect-error TS(2339): Property 'id' does not exist on type 'never'.
        selectedMoodId={selectedMood?.id ?? ''}
        // @ts-expect-error TS(2339): Property 'moodName' does not exist on type 'never'... Remove this comment to see the full error message
        selectedMoodName={selectedMood?.moodName ?? ''}
        filteredDrinks={filteredDrinks}
        handleMoodClick={handleMoodClick}
        handleDrinkCustomClick={handleDrinkCustomClick}
      />
    </PageLayout>
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
