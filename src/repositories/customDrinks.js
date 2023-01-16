import { fetchFBCustomDrinks, fetchFBCustomDrink } from '@/fb/services/customDrinksServices'

const convertBtoF = (customDrink) => {
  const { date_created, mood_id, option_ids, ...rest } = customDrink
  return {
    ...rest,
    dateCreated: date_created?.toMillis(),
    moodId: mood_id,
    optionIds: option_ids,
  }
}

const convertFtoB = (customDrink) => {
  const { dateCreated, moodId, ...rest } = customDrink
  return {
    ...rest,
    date_created: dateCreated,
    mood_id: moodId,
  }
}

/**
 * Returns cusomizes in firestore
 * @returns {Array} custom drinks data
 */
const fetchCustomDrinks = async () => fetchFBCustomDrinks().then((res) => res.map(convertBtoF))

/**
 * Returns a cusomize in firestore
 * @returns {Object} custom drink data
 */
const fetchCustomDrink = async (id) => fetchFBCustomDrink(id).then((res) => convertBtoF(res))

export const customDrinksImpl = {
  fetchCustomDrinks,
  fetchCustomDrink,
}
