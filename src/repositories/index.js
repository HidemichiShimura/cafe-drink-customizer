// import { newsImpl } from './newsService';
import { customDrinksImpl } from './customDrinks';
import { moodsImpl } from './moods';
import { optionsImpl } from './options';

export const backend = {
  customDrinks: customDrinksImpl,
  moods: moodsImpl,
  options: optionsImpl
};