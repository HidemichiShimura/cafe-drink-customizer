import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../configFirestore';

const destructuringData = (doc) => ({ ...doc.data(), id: doc.id });

const fetchFBCustomizes = async () => {
  return getDocs(collection(db, "customizes"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => { throw new Error('Error with fetchFBCustomizes'); });
};

const fetchFBCustomize = async (id) => {
  if (!id) throw new Error('Failed to read id');
  return getDoc(doc(db, "customizes", id))
    .then((qs) => destructuringData(qs))
    .catch((_) => { throw new Error('Error with fetchFBCustomizes'); });
};

const fetchFBMoods = async () => {
  return getDocs(collection(db, "moods"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => { throw new Error('Error with fetchFBMoods'); });
};

const fetchFBOptions = async () => {
  return getDocs(collection(db, "options"))
    .then((qs) => qs.docs.map(destructuringData))
    .catch((_) => { throw new Error('Error with fetchFBOptions'); });
};

export { 
  fetchFBCustomizes, 
  fetchFBCustomize,
  fetchFBMoods, 
  fetchFBOptions 
};