import { collection, getDocs } from "firebase/firestore";
import { db } from '../configFirestore';

const destructuringData = (doc) => ({ ...doc.data(), id: doc.id });

const fetchFBCustomizes = async () => {
  return getDocs(collection(db, "customizes"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => {throw new Error('Error with fetchFBCustomizes');});
};

const fetchFBFeelings = async () => {
  return getDocs(collection(db, "feelings"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => {throw new Error('Error with fetchFBFeelings');});
};

const fetchFBOptions = async () => {
  return getDocs(collection(db, "options"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => {throw new Error('Error with fetchFBOptions');});
};

export { 
  fetchFBCustomizes, 
  fetchFBFeelings, 
  fetchFBOptions 
};