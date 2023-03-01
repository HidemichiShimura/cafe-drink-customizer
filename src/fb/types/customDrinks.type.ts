import { Timestamp } from '@firebase/firestore'
import { CamelToSnakeDeep } from 'utils/types/camelToSnake'

import { SnakeToCamelDeep } from 'utils/types/snakeToCamel'

export interface FBStoreCustomDrink {
  mood_id: string
  icon_name: string
  option_ids: string[]
  title: string
  date_created: Timestamp
  description: string
  id: string
}

export type FBClientCustomDrink = SnakeToCamelDeep<
  Omit<FBStoreCustomDrink, 'date_created'>
> & { dateCreated: number }

export type FBClientCustomDrinkForPost = {
  title: string
  description: string
  moodId: string
  iconName: string
  optionIds: string[]
}

export type FBStoreCustomDrinkForPost =
  CamelToSnakeDeep<FBClientCustomDrinkForPost>
