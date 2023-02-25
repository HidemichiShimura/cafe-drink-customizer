import { useRecoilState } from 'recoil'
// @ts-expect-error TS(2307): Cannot find module 'components/pages/Sample/Sample... Remove this comment to see the full error message
import SmapleItem from 'components/pages/Sample/SampleItem'
// @ts-expect-error TS(2307): Cannot find module 'repositories' or its correspon... Remove this comment to see the full error message
import { backend } from 'repositories'
// @ts-expect-error TS(2307): Cannot find module 'store/atoms/sampleState' or it... Remove this comment to see the full error message
import sampleState from 'store/atoms/sampleState'

// no businesslogics
const Sample = ({
  customDrinks,
  smaple,
  handleClick
}: any) => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div>
    {customDrinks.length &&
      customDrinks.map(
        ({
          id,
          dateCreated,
          description,
          moodId,
          title,
          optionIds
        }: any) => (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div
            key={id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>dateCreated: {dateCreated}</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>description: {description}</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>moodId: {moodId}</p>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <p>title: {title}</p>

            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            {optionIds.length && optionIds.map((o: any) => <div key={o}>{o}</div>)}
          </div>
        ),
      )}
    this is sample {smaple}
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <button onClick={handleClick}>Click {smaple}</button>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <SmapleItem />
  </div>
)

// business logics here
const SampleContainer = ({
  customDrinks
}: any) => {
  const [smaple, setSample] = useRecoilState(sampleState)

  const handleClick = () => setSample((prev: any) => prev + 1)

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
