import { fetchFBCustomizes, fetchFBCustomize } from "@/fb/services/customizeServices";

const convertBtoF = (customize) => {
  const { date_created, mood_id, option_ids, ...rest } = customize;
  return { 
    ...rest, 
    dateCreated: date_created?.toMillis(), 
    moodId: mood_id, 
    optionIds: option_ids 
  };
};

const convertFtoB = (customize) => {
  const { dateCreated, moodId, ...rest } = customize;
  return { 
    ...rest,
    date_created: dateCreated,
    mood_id: moodId 
  };
};

/**
 * Returns cusomizes in firestore
 * @returns {Array} customizes data
 */
const fetchCustomizes = async () => 
  fetchFBCustomizes()
    .then(res => res.map(convertBtoF));

/**
 * Returns a cusomize in firestore
 * @returns {Object} customize data
 */
const fetchCustomize = async (id) => 
  fetchFBCustomize(id)
    .then(res => convertBtoF(res));

export const customizesImpl = {
  fetchCustomizes,
  fetchCustomize
};