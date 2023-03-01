import React, {
  useCallback,
  useMemo,
  useState,
  useEffect,
  FC,
  FormEvent,
} from 'react'
import type { FBClientCustomDrink } from 'fb/types/customDrinks.type'
import type { FBClientMood } from 'fb/types/mood.type'
import type { FBClientOption } from 'fb/types/options.type'
import { backend } from 'repositories'

type DataPostContainerProps = {
  customDrinks: FBClientCustomDrink[]
  options: FBClientOption[]
  moods: FBClientMood[]
}

type CustomDrinksAsProps = {
  optionNames: string[]
  moodName: string
  title: string
  description: string
  moodId: string
  iconName: string
  optionIds: string[]
  id: string
  dateCreated: number
}

type DataPostProps = {
  customDrinks: CustomDrinksAsProps[]
  options: FBClientOption[]
  moods: FBClientMood[]
  handlePostCustomDrink: (e: FormEvent<HTMLFormElement>) => Promise<void>
  handlePostMood: (e: FormEvent<HTMLFormElement>) => Promise<void>
  handlePostOption: (e: FormEvent<HTMLFormElement>) => Promise<void>
  isAdded: boolean
}

const DataPost: FC<DataPostProps> = ({
  customDrinks,
  options,
  moods,
  handlePostCustomDrink,
  handlePostMood,
  handlePostOption,
  isAdded,
}) => {
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
              {moods.map((m) => (
                <option
                  key={m.id}
                  value={m.id}
                >
                  {m.moodName}
                </option>
              ))}
            </select>

            <label>Options</label>

            {options.map((o) => (
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
            {customDrinks.map((cd) => (
              <li
                key={cd.id}
                style={{ border: '1px solid black' }}
              >
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
      </div>
    </>
  )
}

const DataPostContainer: FC<DataPostContainerProps> = ({
  customDrinks,
  options,
  moods,
}) => {
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (isAdded === true) {
      alert('Added!!!')
      setIsAdded(false)
    }
  }, [isAdded])

  const getOptions = useCallback(
    (idx: number) => {
      if (!customDrinks[idx]?.optionIds?.length) return []
      return customDrinks[idx]?.optionIds
        .map(
          (oId) =>
            options.at(options.findIndex((o) => o.id === oId))?.optionName,
        )
        .filter((v) => v) as string[]
    },
    [customDrinks, options],
  )

  const _customDrinks = useMemo(() => {
    if (!customDrinks?.length) return []

    return customDrinks.map((cd, idx) => ({
      ...cd,
      optionNames: getOptions(idx),
      moodName: moods?.filter((m) => m?.id === cd.moodId)[0]?.moodName,
    }))
  }, [customDrinks, moods, getOptions])

  const handlePostOption = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      option_name: { value: string }
    }
    const optionName = target.option_name.value
    if (!optionName) return
    await backend.options.postOption(optionName)
    setIsAdded(true)
  }

  const handlePostMood = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      mood_name: { value: string }
    }
    const moodName = target.mood_name.value
    if (!moodName) return
    await backend.moods.postMood(moodName)
    setIsAdded(true)
  }

  const handlePostCustomDrink = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      title: { value: string }
      description: { value: string }
      mood: { value: string }
      iconName: { value: string }
      length: number
    }
    const title = target.title.value
    const description = target.description.value
    const moodId = target.mood.value
    const iconName = target.iconName.value
    const optionIds = []
    for (let i = 0; i < target.length - 1; i++) {
      if (e.target[i].type === 'checkbox' && e.target[i].checked) {
        optionIds.push(e.target[i].value as string)
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
