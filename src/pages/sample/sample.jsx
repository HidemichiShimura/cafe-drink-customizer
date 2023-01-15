import { useRecoilState } from 'recoil';
import { backend } from "@/repositories";
import SmapleItem from '@/components/pages/Sample/SampleItem';
import sampleState from '@/store/atoms/sampleState';

// no businesslogics
const Sample = ({ customizes, smaple, handleClick }) => (
  <div>
    {
      customizes.length && customizes.map(({
        id,
        dateCreated,
        description,
        moodId,
        title,
        optionIds
      }) => (
        <div key={id} style={{ display: "flex", flexDirection: 'column' }}>
          <p>dateCreated: {dateCreated}</p>
          <p>description: {description}</p>
          <p>moodId: {moodId}</p>
          <p>title: {title}</p>

          {
            optionIds.length && optionIds.map(o => (
              <div key={o}>{o}</div>
            ))
          }
        </div>
      ))
    }

    this is sample {smaple}
    <button onClick={handleClick}>Click {smaple}</button>
    <SmapleItem />
  </div>
);

// business logics here
const SampleContainer = ({ customizes }) => {

  const [smaple, setSample] = useRecoilState(sampleState);

  const handleClick = () => setSample(prev => prev + 1);

  return (
    <Sample
      customizes={customizes}
      smaple={smaple}
      handleClick={handleClick}
      />
  );
};

export const getStaticProps = async () => {
  const data = await backend.customizes.fetchCustomizes();
  return {
    props: { customizes: data },
    revalidate: 10
  };
};

export default SampleContainer;