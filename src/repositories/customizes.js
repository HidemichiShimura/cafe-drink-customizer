import { fetchFBCustomizes } from "@/fb/services/customizeServices";

const convertBtoF = (customizes) => {
  const { date_created, mood_id, option_ids, ...rest } = customizes;
  return { 
    ...rest, 
    dateCreated: date_created.toMillis(), 
    moodId: mood_id, 
    optionIds: option_ids 
  };
};

const convertFtoB = (customizes) => {
  const { dateCreated, moodId, ...rest } = customizes;
  return { 
    ...rest,
    date_created: dateCreated,
    mood_id: moodId 
  };
};

/**
 * Returns the sum of a and b 
 * @returns {Array} customizes data
 */
const fetchCustomizes = async () => 
  fetchFBCustomizes()
    .then(res => res.map(convertBtoF));

export const customizesImpl = {
  fetchCustomizes
};