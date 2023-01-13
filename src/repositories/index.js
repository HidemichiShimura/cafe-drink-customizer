// import { newsImpl } from './newsService';
import { customizesImpl } from './customizes';
import { moodsImpl } from './moods';
import { optionsImpl } from './options';

export const backend = {
  customizes: customizesImpl,
  moods: moodsImpl,
  options: optionsImpl
};