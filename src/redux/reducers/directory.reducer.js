const DEFAULT_STATE = {
  sections: [
    {
      title: 'Placeholder',
      imageUrl: 'https://source.unsplash.com/random/900×700/?kiwi',
      id: 1,
      linkUrl: ''
    },
    {
      title: 'Placeholder',
      imageUrl: 'https://source.unsplash.com/random/900×700/?pear',
      id: 2,
      linkUrl: ''
    },
    {
      title: 'Placeholder',
      imageUrl: 'https://source.unsplash.com/random/900×700/?banana',
      id: 3,
      linkUrl: ''
    },
    {
      title: 'Placeholder',
      imageUrl: 'https://source.unsplash.com/random/900×700/?mango',
      size: 'large',
      id: 4,
      linkUrl: ''
    },
    {
      title: 'Placeholder',
      imageUrl: 'https://source.unsplash.com/random/900×700/?plum',
      size: 'large',
      id: 5,
      linkUrl: ''
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
