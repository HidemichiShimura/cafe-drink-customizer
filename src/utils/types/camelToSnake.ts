import type { SnakeCase, SnakeCasedPropertiesDeep } from 'type-fest'

export type CamelToSnakeCase<T extends string> = SnakeCase<T>

export type CamelToSnakeDeep<T extends object> = SnakeCasedPropertiesDeep<T>
