import React from 'react'
import Category from '../Category/Category'
import { Box, Categories, Content, Top, Wrapper } from './Main.styles'

const Main = () => {
  return (
    <>
      <Wrapper>
        <Content>
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