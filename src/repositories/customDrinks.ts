import {
  fetchFBCustomDrinks,
  fetchFBCustomDrink,
  postFBCustomDrink,
} from 'fb/services/customDrinksServices'

const convertBtoF = (customDrink: any) => {
  const { date_created, mood_id, option_ids, icon_name, ...rest } = customDrink
  return {
    ...rest,
    dateCreated: date_created?.toMillis(),
    moodId: mood_id,
    optionIds: option_ids,
    iconName: icon_name,
  }
}

const convertFtoB = (customDrink: any) => {
  const { moodId, optionIds, iconName, ...rest } = customDrink
  return {
    ...rest,
    mood_id: moodId,
    option_ids: optionIds,
    icon_name: iconName,
  }
}

/**
 * Returns cusomizes in firestore
 * @returns {Array} custom drinks data
 */
const fetchCustomDrinks = async () =>
  fetchFBCustomDrinks().then((res: any) => res.map(convertBtoF))

/**
 * Returns a cusomize in firestore
 * @returns {Object} custom drink data
 */
const fetchCustomDrink = async (id: any) =>
  fetchFBCustomDrink(id).then((res: any) => convertBtoF(res))

/**
 * Post a new custom drink in firestore
 * @param {string} custom drink data
 */
const postCustomDrink = async (data: any) =>
  postFBCustomDrink(convertFtoB(data))

export const customDrinksImpl = {
  fetchCustomDrinks,
  fetchCustomDrink,
  postCustomDrink,
}