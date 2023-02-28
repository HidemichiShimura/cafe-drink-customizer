import { Timestamp } from '@firebase/firestore'

import { SnakeToCamelDeep } from 'utils/types/snakeToCamel'

export interface FBStoreOption {
  id: string
  option_name: string
}

export type FBClientOption = SnakeToCamelDeep<FBStoreOption>
