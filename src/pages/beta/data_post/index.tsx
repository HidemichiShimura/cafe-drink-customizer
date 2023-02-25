import React, { useCallback, useMemo, useState, useEffect } from 'react'
// @ts-expect-error TS(2307): Cannot find module 'repositories' or its correspon... Remove this comment to see the full error message
import { backend } from 'repositories'

const DataPost = ({
  customDrinks,
  options,
  moods,
  handlePostCustomDrink,
  handlePostMood,
  handlePostOption,
  isAdded
}: any) => {
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    {isAdded && 'Added!!!!'}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div style={{ height: '100vh' }}>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        style={{ border: '1px solid black', width: '100%', padding: '30px' }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>Add Option</h3>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={handlePostOption}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            type='text'
            name='option_name'
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button type='submit'>Submit</button>
        </form>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        style={{ border: '1px solid black', width: '100%', padding: '30px' }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>Add Mood</h3>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form onSubmit={handlePostMood}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            type='text'
            name='mood_name'
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button type='submit'>Submit</button>
        </form>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        style={{ border: '1px solid black', width: '100%', padding: '30px' }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>Add Custom Drinks</h3>

        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <form
          onSubmit={handlePostCustomDrink}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label htmlFor='title'>Title</label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            id='title'
            name='title'
            type='text'
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label htmlFor='title'>Description</label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <textarea
            id='description'
            name='description'
            // @ts-expect-error TS(2322): Type '{ id: string; name: string; type: string; }'... Remove this comment to see the full error message
            type='text'
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label htmlFor='iconName'>Icon</label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <input
            id='iconName'
            type='text'
            name='iconName'
          />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label htmlFor='mood'>Mood</label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <select
            name='mood'
            id='mood'
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {moods.map((m: any) => <option
              key={m.id}
              value={m.id}
            >
              {m.moodName}
            </option>)}
          </select>

          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <label>Options</label>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {options.map((o: any) => <div key={o.id}>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <label htmlFor={o.id}>{o.optionName}</label>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <input
              id={o.id}
              type='checkbox'
              name={o.optionName}
              value={o.id}
            />
          </div>)}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <button type='submit'>Submit</button>
        </form>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div
        style={{ border: '1px solid black', width: '100%', padding: '30px' }}
      >
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h3>List of Custom Drinks</h3>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ul
          style={{
            overflowY: 'scroll',
            width: '100%',
            height: '300px',
            padding: '30px',
          }}
        >
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          {customDrinks.map((cd: any) => <li
            key={cd.id}
            style={{ border: '1px solid black' }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h4>title: {cd.title}</h4>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>description: {cd.description}</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>moodName: {cd.moodName}</p>
            optionNames:
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ul>
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              {cd.optionNames.map((on: any) => <li key={on}>{on}</li>)}
            </ul>
          </li>)}
        </ul>
      </div>
    </div>
  </>;
}

const DataPostContainer = ({
  customDrinks,
  options,
  moods
}: any) => {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (isAdded === true) {
      alert('Added!!!')
      setIsAdded(false)
    }
  }, [isAdded])

  const getOptions = useCallback(
    (idx: any) => customDrinks[idx]?.optionIds?.length
      ? customDrinks[idx]?.optionIds.map(
          (oId: any) => options[options.findIndex((o: any) => o.id === oId)].optionName,
        )
      : [],
    [customDrinks, options],
  )

  const _customDrinks = useMemo(() => {
    if (!customDrinks?.length) return []

    // @ts-expect-error TS(7006): Parameter 'cd' implicitly has an 'any' type.
    return customDrinks.map((cd, idx) => ({
      ...cd,
      optionNames: getOptions(idx),
      moodName: moods.filter((m: any) => m.id === cd.moodId)[0]?.moodName
    }));
  }, [customDrinks, moods, getOptions])

  const handlePostOption = async (e: any) => {
    e.preventDefault()
    const optionName = e.target.option_name.value
    if (!optionName) return
    await backend.options.postOption(optionName)
    setIsAdded(true)
  }

  const handlePostMood = async (e: any) => {
    e.preventDefault()
    const moodName = e.target.mood_name.value
    if (!moodName) return
    await backend.moods.postMood(moodName)
    setIsAdded(true)
  }

  const handlePostCustomDrink = async (e: any) => {
    e.preventDefault()
    const title = e.target.title.value
    const description = e.target.description.value
    const moodId = e.target.mood.value
    const iconName = e.target.iconName.value
    const optionIds = []
    for (let i = 0; i < e.target.length - 1; i++) {
      if (e.target[i].type === 'checkbox' && e.target[i].checked) {
        optionIds.push(e.target[i].value)
      }
    }
    if (!title || !description || !moodId || !iconName || !optionIds.length)
      return
    await backend.customDrinks.postCustomDrink({
      title,
      description,
      moodId,
      iconName,
      optionIds,
    })
    setIsAdded(true)
  }

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <DataPost
      customDrinks={_customDrinks}
      options={options}
      moods={moods}
      handlePostCustomDrink={handlePostCustomDrink}
      handlePostOption={handlePostOption}
      handlePostMood={handlePostMood}
      isAdded={isAdded}
    />
  )
}

export const getServerSideProps = async () => {
  const customDrinks = await backend.customDrinks.fetchCustomDrinks()
  const options = await backend.options.fetchOptions()
  const moods = await backend.moods.fetchMoods()

  return { props: { customDrinks, options, moods } }
}

export default DataPostContainer
