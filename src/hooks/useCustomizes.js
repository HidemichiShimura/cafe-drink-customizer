import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import customizesState from 'store/atoms/customizesState'
import { backend } from 'repositories'

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
