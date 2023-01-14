import { atom } from 'recoil';

const sampleState = atom({
  key: 'sampleState',
  default: 1,
});

export default sampleState;