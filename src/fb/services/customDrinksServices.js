import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../configFirestore';

const restructuringData = (doc) => ({ ...doc.data(), id: doc.id });

const fetchFBCustomDrinks = async () => {
  return getDocs(collection(db, "custom_drinks"))
    .then((qs) => qs.docs.map(restructuringData))
    .catch((_) => { throw new Error('Error with fetchFBCustomDrinks'); });
};

const fetchFBCustomDrink = async (id) => {
  if (!id) throw new Error('Failed to read id');
  return getDoc(doc(db, "custom_drinks", id))
    .then((qs) => restructuringData(qs))
    .catch((_) => { throw new Error('Error with fetchFBCustomDrink'); });
};

const fetchFBMoods = async () => {
  return getDocs(collection(db, "moods"))
    .then((qs) => qs.docs.map(restructuringData))
    .catch((_) => { throw new Error('Error with fetchFBMoods'); });
};

const fetchFBOptions = async () => {
  return getDocs(collection(db, "options"))
    .then((qs) => qs.docs.map(restructuringData))
    .catch((_) => { throw new Error('Error with fetchFBOptions'); });
};

export { 
  fetchFBCustomDrinks, 
  fetchFBCustomDrink,
  fetchFBMoods, 
  fetchFBOptions 
};