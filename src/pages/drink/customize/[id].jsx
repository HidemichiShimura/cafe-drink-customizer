import { useRecoilState } from 'recoil';
import { backend } from "@/repositories";
import SmapleItem from '@/components/pages/Sample/SampleItem';
import sampleState from '@/store/atoms/sampleState';

// no businesslogics
const DrinkCustomize = ({ customizeInfo }) => (
  <div>
    {customizeInfo && Object.keys(customizeInfo).map(c => (
      <div key={c}>
        {c} {'=>'} {customizeInfo[c]}
      </div>
    ))}

  </div>
);

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const data = await backend.customizes.fetchCustomize(id);
  return {
    props: { customizeInfo: data }
  };
};

export async function getStaticPaths() {
  const data = await backend.customizes.fetchCustomizes();

  const paths = data.map((d) => ({
    params: { id: d.id },
  }));

  return { paths, fallback: false };
}

export default DrinkCustomize;