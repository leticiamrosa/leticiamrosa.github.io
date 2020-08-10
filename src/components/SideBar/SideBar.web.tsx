import React, { ReactElement } from 'react'
import Styled from './SideBar.styles.web';

interface Props {

}

export const Sidebar = ({}: Props ): ReactElement => {
  return (
    <Styled.Container>
      <Styled.Content>
        <h1>Ola</h1>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Sidebar;
