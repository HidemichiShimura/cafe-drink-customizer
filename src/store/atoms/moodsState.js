import { atom } from 'recoil';

const moodsState = atom({
  key: 'moodsState',
  default: []
});

export default moodsState;