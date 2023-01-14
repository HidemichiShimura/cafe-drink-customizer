import { fetchFBOptions } from "@/fb/services/customizeServices";

const convertBtoF = (options) => {
  const { ...rest } = options;
  return { ...rest, };
};

// It won't be needed if there's no post request for moods
// const convertFtoB = (moods) => {
//   const { moodName, ...rest } = moods;
//   return { ...rest, mood_name: moodName };
// };

/**
 * Returns the sum of a and b 
 * @returns {Array} customizes data
 */
const fetchOptions = async () => 
  fetchFBOptions()
    .then(res => res.map(convertBtoF));

export const optionsImpl = {
  fetchOptions
};