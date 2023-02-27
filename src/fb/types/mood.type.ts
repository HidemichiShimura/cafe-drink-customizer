import { SnakeToCamelDeep } from 'utils/types/snakeToCamel'

export interface FBStoreMood {
  id: string
  mood_name: string
}

export type FBClientMood = SnakeToCamelDeep<FBStoreMood>
