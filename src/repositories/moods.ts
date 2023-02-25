import { fetchFBMoods, postFBMood } from 'fb/services/customDrinksServices'

const convertBtoF = (moods) => {
  const { mood_name, ...rest } = moods
  return { ...rest, moodName: mood_name }
}

// It won't be needed if there's no post request for moods
// const convertFtoB = (moods) => {
//   const { moodName, ...rest } = moods;
//   return { ...rest, mood_name: moodName };
// };

/**
 * Returns the sum of a and b
 * @returns {Array} moods data
 */
const fetchMoods = async () =>
  fetchFBMoods().then((res) => res.map(convertBtoF))

/**
 * Post a new mood in firestore
 * @param {Object} data mood data
 */
const postMood = async (data) => postFBMood(data)

export const moodsImpl = {
  fetchMoods,
  postMood,
}
