export const CATEGORY_LIST = [
  {
    id: 1,
    name: '의류',
    subcategory: [
      {
        id: 1,
        name: '상의',
        subcategory: [
          { id: 1, name: '패딩' },
          { id: 2, name: '코트' },
        ],
      },
      {
        id: 2,
        name: '하의',
        subcategory: [
          { id: 3, name: '반바지' },
          { id: 4, name: '긴바지' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: '디지털',
    subcategory: [
      {
        id: 3,
        name: '컴퓨터',
        subcategory: [
          { id: 5, name: '노트북' },
          { id: 6, name: '마우스' },
        ],
      },
      {
        id: 4,
        name: '가전제품',
        subcategory: [
          { id: 7, name: 'TV' },
          { id: 8, name: '에어컨' },
        ],
      },
    ],
  },
];
