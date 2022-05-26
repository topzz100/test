import React from 'react'
import Category from '../Category/Category'
import { Box, Categories, Content, Top, TopMenu, Wrapper } from './Main.styles'

const Main = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <TopMenu>
            <span>
              <i class="fa-solid fa-bars"></i>
            </span>
            <img src ="/images/cloudbank.png"/>
          </TopMenu>
          <Top>
            <h4>Loans</h4>
            <p>
              Monday,
            <span> 21st February, 2021</span>
            </p>
          </Top>
          <Categories>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box>
           <Box>
             <Category/>
           </Box> 
            
          </Categories>
        </Content>
      </Wrapper>
    </>
  )
}

export default Main
