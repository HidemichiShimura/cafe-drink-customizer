import React, { useCallback, useMemo, useState, useEffect } from 'react'
import { backend } from 'repositories'

const DataPost = ({
  customDrinks,
  options,
  moods,
  handlePostCustomDrink,
  handlePostMood,
  handlePostOption,
  isAdded,
}: any) => {
  return (
    <>
      {isAdded && 'Added!!!!'}

      <div style={{ height: '100vh' }}>
        <div
          style={{ border: '1px solid black', width: '100%', padding: '30px' }}
        >
          <h3>Add Option</h3>

          <form onSubmit={handlePostOption}>
            <input
              type='text'
              name='option_name'
            />

            <button type='submit'>Submit</button>
          </form>
        </div>

        <div
          style={{ border: '1px solid black', width: '100%', padding: '30px' }}
        >
          <h3>Add Mood</h3>

          <form onSubmit={handlePostMood}>
            <input
              type='text'
              name='mood_name'
            />

            <button type='submit'>Submit</button>
          </form>
        </div>

        <div
          style={{ border: '1px solid black', width: '100%', padding: '30px' }}
        >
          <h3>Add Custom Drinks</h3>

          <form
            onSubmit={handlePostCustomDrink}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <label htmlFor='title'>Title</label>

            <input
              id='title'
              name='title'
              type='text'
            />

            <label htmlFor='title'>Description</label>

            <textarea
              id='description'
              name='description'
              type='text'
            />

            <label htmlFor='iconName'>Icon</label>

            <input
              id='iconName'
              type='text'
              name='iconName'
            />

            <label htmlFor='mood'>Mood</label>

            <select
              name='mood'
              id='mood'
            >
              {moods.map((m: any) => (
                <option
                  key={m.id}
                  value={m.id}
                >
                  {m.moodName}
                </option>
              ))}
            </select>

            <label>Options</label>

            {options.map((o: any) => (
              <div key={o.id}>
                <label htmlFor={o.id}>{o.optionName}</label>

                <input
                  id={o.id}
                  type='checkbox'
                  name={o.optionName}
                  value={o.id}
                />
              </div>
            ))}

            <button type='submit'>Submit</button>
          </form>
        </div>

        <div
          style={{ border: '1px solid black', width: '100%', padding: '30px' }}
        >
          <h3>List of Custom Drinks</h3>

          <ul
            style={{
              overflowY: 'scroll',
              width: '100%',
              height: '300px',
              padding: '30px',
            }}
          >
            {customDrinks.map((cd: any) => (
              <li
                key={cd.id}
                style={{ border: '1px solid black' }}
              >
                <h4>title: {cd.title}</h4>
                <p>description: {cd.description}</p>
                <p>moodName: {cd.moodName}</p>
                optionNames:
                <ul>
                  {cd.optionNames.map((on: any) => (
                    <li key={on}>{on}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const DataPostContainer = ({ customDrinks, options, moods }: any) => {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (isAdded === true) {
      alert('Added!!!')
      setIsAdded(false)
    }
  }, [isAdded])

  const getOptions = useCallback(
    (idx: any) =>
      customDrinks[idx]?.optionIds?.length
        ? customDrinks[idx]?.optionIds.map(
            (oId: any) =>
              options[options.findIndex((o: any) => o.id === oId)].optionName,
          )
        : [],
    [customDrinks, options],
  )

  const _customDrinks = useMemo(() => {
    if (!customDrinks?.length) return []

    return customDrinks.map((cd, idx) => ({
      ...cd,
      optionNames: getOptions(idx),
      moodName: moods.filter((m: any) => m.id === cd.moodId)[0]?.moodName,
    }))
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
