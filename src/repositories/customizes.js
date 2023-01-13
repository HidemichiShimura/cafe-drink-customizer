import { fetchFBCustomizes } from "fb/services/customizeServices";

const convertBtoF = (customizes) => {
  const { date_created, feeling_id, ...rest } = customizes;
  return { ...rest, dateCreated: date_created, feelingId: feeling_id };
};

const convertFtoB = (customizes) => {
  const { dateCreated, feelingId, ...rest } = customizes;
  return { ...rest, date_created: dateCreated, feeling_id: feelingId };
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