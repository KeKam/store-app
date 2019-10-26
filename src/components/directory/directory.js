import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item';
import { Directory as S } from './directory.styled';

const sectionArray = [
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
];

const Directory = () => {
  const [sections, setSections] = useState(sectionArray);

  return (
    <S.Container>
      {sections.map(({ id, ...sectionProps }) => {
        return <MenuItem key={id} {...sectionProps} />;
      })}
    </S.Container>
  );
};

export default Directory;
