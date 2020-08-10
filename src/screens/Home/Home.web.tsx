import React, { ReactElement } from 'react'
import Styled from './Home.styles.web';

interface Props {
  title: string;
}

export const Home = ({ title }: Props ): ReactElement => {
  return (
    <Styled.Container>
      <h1>{title}</h1>
    </Styled.Container>
  )
}

export default Home;
