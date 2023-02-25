// @ts-expect-error TS(2307): Cannot find module 'fb/services/customDrinksServic... Remove this comment to see the full error message
import { fetchFBOptions, postFBOption } from 'fb/services/customDrinksServices'

const convertBtoF = (options: any) => {
  const { option_name, ...rest } = options
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
  fetchFBOptions().then((res: any) => res.map(convertBtoF))

/**
 * Post a new  option in firestore
 * @param {stringh} data option data
 */
const postOption = async (data: any) => postFBOption(data)

export const optionsImpl = {
  fetchOptions,
  postOption,
}
