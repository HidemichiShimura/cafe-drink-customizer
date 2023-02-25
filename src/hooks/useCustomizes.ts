import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
// @ts-expect-error TS(2307): Cannot find module 'repositories' or its correspon... Remove this comment to see the full error message
import { backend } from 'repositories'
// @ts-expect-error TS(2307): Cannot find module 'store/atoms/customizesState' o... Remove this comment to see the full error message
import customizesState from 'store/atoms/customizesState'

// custom hook which will return isFetching, newsList, fetchNewsList
const useCustomizes = () => {
  // const [customizes, setCustomizes] = useRecoilState(customizesState);
  // const fetchNewsList = useCallback(
  //   () => {
  //     backend.customizes.fetchCustomizes()
  //       .then(res => setCustomizes(res));
  //   }, []);
  // return { customizes, fetchNewsList };
}

export default useCustomizes
