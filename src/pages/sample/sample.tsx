import { useRecoilState } from 'recoil'
import SmapleItem from 'components/pages/Sample/SampleItem'
import { backend } from 'repositories'
import sampleState from 'store/atoms/sampleState'

// no businesslogics
const Sample = ({ customDrinks, smaple, handleClick }) => (
  <div>
    {customDrinks.length &&
      customDrinks.map(
        ({ id, dateCreated, description, moodId, title, optionIds }) => (
          <div
            key={id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <p>dateCreated: {dateCreated}</p>
            <p>description: {description}</p>
            <p>moodId: {moodId}</p>
            <p>title: {title}</p>

            {optionIds.length && optionIds.map((o) => <div key={o}>{o}</div>)}
          </div>
        ),
      )}
    this is sample {smaple}
    <button onClick={handleClick}>Click {smaple}</button>
    <SmapleItem />
  </div>
)

// business logics here
const SampleContainer = ({ customDrinks }) => {
  const [smaple, setSample] = useRecoilState(sampleState)

  const handleClick = () => setSample((prev) => prev + 1)

  return (
    <Sample
      customDrinks={customDrinks}
      smaple={smaple}
      handleClick={handleClick}
    />
  )
}

export const getStaticProps = async () => {
  const customDrinks = await backend.customDrinks.fetchCustomDrinks()
  return {
    props: { customDrinks },
    revalidate: 10,
  }
}

export default SampleContainer
