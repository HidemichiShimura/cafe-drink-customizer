import {
  fetchFBCustomDrinks,
  fetchFBCustomDrink,
  postFBCustomDrink,
} from 'fb/services/customDrinksServices'
import type {
  FBClientCustomDrink,
  FBStoreCustomDrink,
} from 'fb/types/customDrinks.type'

type ConvertBtoF = (customDrink: FBStoreCustomDrink) => FBClientCustomDrink

const convertBtoF: ConvertBtoF = (customDrink) => {
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
  fetchFBCustomDrinks().then((res) => res.map(convertBtoF))

/**
 * Returns a cusomize in firestore
 * @returns {Object} custom drink data
 */
const fetchCustomDrink = async (id: string) =>
  fetchFBCustomDrink(id).then((res) => convertBtoF(res))

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
