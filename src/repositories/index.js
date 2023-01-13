// import { newsImpl } from './newsService';
import { customizesImpl } from './customizes';
import { feelingsImpl } from './feelings';
import { optionsImpl } from './options';

export const backend = {
  customizes: customizesImpl,
  feelings: feelingsImpl,
  options: optionsImpl
};