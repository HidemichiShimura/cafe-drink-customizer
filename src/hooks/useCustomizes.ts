import { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import { backend } from 'repositories'
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
