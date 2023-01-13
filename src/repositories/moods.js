import { fetchFBMoods } from "fb/services/customizeServices";

const convertBtoF = (moods) => {
  const { mood_name, ...rest } = moods;
  return { ...rest, moodName: mood_name };
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
const fetchMoods = async () => 
  fetchFBMoods()
    .then(res => res.map(convertBtoF));

export const moodsImpl = {
  fetchMoods
};