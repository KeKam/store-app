import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item';
import { Directory as S } from './directory.styled';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <S.Container>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </S.Container>
  );
};

export default Directory;
