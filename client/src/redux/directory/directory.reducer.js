const DEFAULT_STATE = {
  sections: [
    {
      title: 'Spring',
      imageUrl: 'https://source.unsplash.com/random/900×700/?kiwi',
      id: 1,
      linkUrl: 'collection/spring'
    },
    {
      title: 'Summer',
      imageUrl: 'https://source.unsplash.com/random/900×700/?pear',
      id: 2,
      linkUrl: 'collection/summer'
    },
    {
      title: 'Autumn',
      imageUrl: 'https://source.unsplash.com/random/900×700/?banana',
      id: 3,
      linkUrl: 'collection/autumn'
    },
    {
      title: 'Winter',
      imageUrl: 'https://source.unsplash.com/random/900×700/?mango',
      id: 4,
      linkUrl: 'collection/winter'
    }
  ]
};

const directoryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
