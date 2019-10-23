import React, { useState } from 'react';

import MenuItem from '../menu-item/menu-item';
import { Directory as S } from './directory.styled';

const sectionArray = [
  {
    title: 'Placeholder',
    imageUrl: 'https://source.unsplash.com/random/900×700/?kiwi',
    id: 1
  },
  {
    title: 'Placeholder',
    imageUrl: 'https://source.unsplash.com/random/900×700/?pear',
    id: 2
  },
  {
    title: 'Placeholder',
    imageUrl: 'https://source.unsplash.com/random/900×700/?banana',
    id: 3
  },
  {
    title: 'Placeholder',
    imageUrl: 'https://source.unsplash.com/random/900×700/?mango',
    id: 4
  },
  {
    title: 'Placeholder',
    imageUrl: 'https://source.unsplash.com/random/900×700/?plum',
    id: 5
  }
];

const Directory = () => {
  const [sections, setSections] = useState(sectionArray);

  return (
    <S.Container>
      {sections.map(({ id, title, imageUrl, size }) => {
        return (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        );
      })}
    </S.Container>
  );
};

export default Directory;
