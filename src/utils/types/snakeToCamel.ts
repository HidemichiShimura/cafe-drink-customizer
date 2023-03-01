import type { CamelCase, CamelCasedPropertiesDeep } from 'type-fest'

export type SnakeToCamelCase<T extends string> = CamelCase<T>

export type SnakeToCamelDeep<T extends object> = CamelCasedPropertiesDeep<T>
