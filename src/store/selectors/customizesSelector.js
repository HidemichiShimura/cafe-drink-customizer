import { selector }from 'recoil';
import { backend } from 'repositories';

export const customizesSelector = selector({
  key: 'customizesSelector',
  get: async () => {
    const data = await backend.customizes.fetchCustomizes();
    return data;
  }
});