import { atom } from 'recoil';

const customizesState = atom({
  key: 'customizesState',
  default: []
});

export default customizesState;