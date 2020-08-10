import React, { Component, ReactElement } from 'react'
import Home from './Home.web';

class HomeContainer extends Component {
      
  public componentDidMount = (): void => {
  }

  public render (): ReactElement {

    return (
      <Home
        title="oi"
      />
    )
  }
}

export default HomeContainer;