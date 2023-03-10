import { fetchFBOptions, postFBOption } from 'fb/services/customDrinksServices'
import { FBClientOption, FBStoreOption } from 'fb/types/options.type'

type ConvertBtoF = (customDrink: FBStoreOption) => FBClientOption

const convertBtoF: ConvertBtoF = (option) => {
  const { option_name, ...rest } = option
  return { ...rest, optionName: option_name }
}

// It won't be needed if there's no post request for moods
// const convertFtoB = (moods) => {
//   const { moodName, ...rest } = moods;
//   return { ...rest, mood_name: moodName };
// };

/**
 * Returns the sum of a and b
 * @returns {Array} options data
 */
const fetchOptions = async () =>
  fetchFBOptions().then((res) => res.map(convertBtoF))

/**
 * Post a new  option in firestore
 * @param {stringh} data option data
 */
const postOption = async (data: string) => postFBOption(data)

export const optionsImpl = {
  fetchOptions,
  postOption,
}
