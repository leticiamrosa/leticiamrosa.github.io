import React, { ReactElement } from 'react'
import Styled from './Header.styles.web';

interface Props {

}

export const Header = ({}: Props ): ReactElement => {
  return (
    <Styled.WrapperHeader>
      <Styled.ContentHeader>
        <h1>Ola</h1>
      </Styled.ContentHeader>
    </Styled.WrapperHeader>
  )
}

export default Header;
