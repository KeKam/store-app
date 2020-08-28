import directoryReducer from './directory.reducer';

const DEFAULT_STATE = {
  sections: [
    {
      title: 'SPRING',
      imageUrl: 'https://source.unsplash.com/YCh5-MpB6C8',
      id: 1,
      linkUrl: 'collection/spring',
    },
    {
      title: 'SUMMER',
      imageUrl: 'https://source.unsplash.com/83zRhEhFMfo',
      id: 2,
      linkUrl: 'collection/summer',
    },
    {
      title: 'AUTUMN',
      imageUrl: 'https://source.unsplash.com/yuiJO6bvHi4',
      id: 3,
      linkUrl: 'collection/autumn',
    },
    {
      title: 'WINTER',
      imageUrl: 'https://source.unsplash.com/5AiWn2U10cw',
      id: 4,
      linkUrl: 'collection/winter',
    },
  ],
};

describe('directoryReducer', () => {
  it('should return default state', () => {
    expect(directoryReducer(undefined, {})).toEqual(DEFAULT_STATE);
  });
});
