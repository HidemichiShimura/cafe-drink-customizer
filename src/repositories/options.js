import { fetchFBOptions } from "fb/services/customizeServices";

const convertBtoF = (options) => {
  const { ...rest } = options;
  return { ...rest, };
};

// It won't be needed if there's no post request for feelings
// const convertFtoB = (feelings) => {
//   const { feelingName, ...rest } = feelings;
//   return { ...rest, feeling_name: feelingName };
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