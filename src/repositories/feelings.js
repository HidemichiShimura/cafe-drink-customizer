import { fetchFBFeelings } from "fb/services/customizeServices";

const convertBtoF = (feelings) => {
  const { feeling_name, ...rest } = feelings;
  return { ...rest, feelingName: feeling_name };
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
const fetchFeelings = async () => 
  fetchFBFeelings()
    .then(res => res.map(convertBtoF));

export const feelingsImpl = {
  fetchFeelings
};