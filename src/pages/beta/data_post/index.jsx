import React, { useCallback, useMemo } from 'react'
import { backend } from '@/repositories'

const DataPost = ({ customDrinks, options, moods }) => {
  return (
    <>
      <div>
        <h3>Add Custom Drinks</h3>

        <form style={{ display: 'flex', flexDirection: 'column' }}>
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
          <label htmlFor='mood'>Mood</label>
          <select
            name='mood'
            id='mood'
          >
            {moods.map((m) => (
              <option key={m.id}>{m.moodName}</option>
            ))}
          </select>

          <label>Options</label>
          {options.map((o) => (
            <>
              <label htmlFor={o.id}>{o.optionName}</label>
              <input
                key={o.id}
                id={o.id}
                type='checkbox'
                name={o.optionName}
                value={o.id}
              />
            </>
          ))}
        </form>
      </div>
      <div>
        <h3>List of Custom Drinks</h3>
        <ul style={{ overflowY: 'scroll', width: '100%', height: '200px' }}>
          {customDrinks.map((cd) => (
            <li key={cd.id}>
              <h4>title: {cd.title}</h4>
              <p>description: {cd.description}</p>
              <p>moodName: {cd.moodName}</p>
              optionNames:
              <ul>
                {cd.optionNames.map((on) => (
                  <li key={on}>{on}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

const DataPostContainer = ({ customDrinks, options, moods }) => {
  const getOptions = useCallback(
    (idx) =>
      customDrinks[idx]?.optionIds?.length
        ? customDrinks[idx]?.optionIds.map(
            (oId) => options[options.findIndex((o) => o.id === oId)].optionName,
          )
        : [],
    [customDrinks, options],
  )

  const _customDrinks = useMemo(() => {
    if (!customDrinks?.length) return []

    return customDrinks.map((cd, idx) => ({
      ...cd,
      optionNames: getOptions(idx),
      moodName: moods.filter((m) => m.id === cd.moodId)[0]?.moodName,
    }))
  }, [customDrinks, moods, getOptions])

  return (
    <DataPost
      customDrinks={_customDrinks}
      options={options}
      moods={moods}
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
