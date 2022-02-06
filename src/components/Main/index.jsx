import React from 'react';
import Indexing from '../IndexingType';
import Result from '../Result';
import Simulator from '../Simulator';
import MainStyle from './Styled';

function Main() {
  return (
    <MainStyle>
      <Simulator />
      <Indexing />
      <Result />
    </MainStyle>
  )
}

export default Main;