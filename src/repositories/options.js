import { fetchFBOptions } from '@/fb/services/customDrinksServices'

const convertBtoF = (options) => {
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
const fetchOptions = async () => fetchFBOptions().then((res) => res.map(convertBtoF))

export const optionsImpl = {
  fetchOptions,
}
