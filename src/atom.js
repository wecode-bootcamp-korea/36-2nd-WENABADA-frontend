import { atom } from 'recoil';

export const mainProductsData = atom({
  key: 'mainProductsData',
  default: {
    first: -1,
    second: -1,
    third: -1,
  },
});

export const categoryState = atom({
  key: 'categoryState',
  default: {
    first: -1,
    second: -1,
    third: -1,
  },
});

export const searchValue = atom({
  key: 'searchValue',
  default: '',
});
