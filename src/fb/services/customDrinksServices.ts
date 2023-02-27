import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  doc,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../configFirestore'
import type { FBStoreCustomDrink } from 'fb/types/customDrinks.type'
import type { FBStoreMood } from 'fb/types/mood.type'

const restructuringData = (doc: any) => ({
  ...doc.data(),
  id: doc.id,
})

const fetchFBCustomDrinks = async (): Promise<FBStoreCustomDrink[]> => {
  return getDocs(collection(db, 'custom_drinks'))
    .then((qs) => qs.docs.map(restructuringData) as FBStoreCustomDrink[])
    .catch((_) => {
      throw new Error('Error with fetchFBCustomDrinks')
    })
}

const fetchFBCustomDrink = async (id: string): Promise<FBStoreCustomDrink> => {
  if (!id) throw new Error('Failed to read id')
  return getDoc(doc(db, 'custom_drinks', id))
    .then((qs) => restructuringData(qs) as FBStoreCustomDrink)
    .catch((_) => {
      throw new Error('Error with fetchFBCustomDrink')
    })
}

const fetchFBMoods = async (): Promise<FBStoreMood[]> => {
  return getDocs(collection(db, 'moods'))
    .then((qs) => qs.docs.map(restructuringData) as FBStoreMood[])
    .catch((_) => {
      throw new Error('Error with fetchFBMoods')
    })
}

const fetchFBOptions = async () => {
  return getDocs(collection(db, 'options'))
    .then((qs) => qs.docs.map(restructuringData))
    .catch((_) => {
      throw new Error('Error with fetchFBOptions')
    })
}

const postFBCustomDrink = async (data: any) => {
  if (!data) throw new Error('Failed to read data')
  return addDoc(collection(db, 'custom_drinks'), {
    date_created: Timestamp.fromDate(new Date(new Date().toLocaleDateString())),
    ...data,
  }).catch((_) => {
    throw new Error('Error with postFBCustomDrink')
  })
}

const postFBOption = async (data: any) => {
  if (!data) throw new Error('Failed to read option')
  return addDoc(collection(db, 'options'), { option_name: data }).catch((_) => {
    throw new Error('Error with postFBOption')
  })
}

const postFBMood = async (data: any) => {
  if (!data) throw new Error('Failed to read mood')
  return addDoc(collection(db, 'moods'), { mood_name: data }).catch((_) => {
    throw new Error('Error with postFBMood')
  })
}

export {
  fetchFBCustomDrinks,
  fetchFBCustomDrink,
  fetchFBMoods,
  fetchFBOptions,
  postFBCustomDrink,
  postFBOption,
  postFBMood,
}
