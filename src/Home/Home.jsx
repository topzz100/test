import React from 'react'
import Main from '../Main/Main'
import SideBar from '../SideBar/SideBar'
import { Content, Wrapper } from './Home.styles'

const Home = () => {
  return (
      <>
        <Wrapper>
          <Content>
            <SideBar/>
            <Main/>
          </Content>
        </Wrapper>
      </>
    )
}

export default Home