import React from 'react'
import { Content, Desc, Image, Text, Wrapper } from './Category.styles'

const Category = () => {
  return (
    <Wrapper>
      <Content>
        <Image src='/images/one.png'/>
        <Text>
          One month Loan
        </Text>
        <Desc>
          Access funds for pesonal upkeep for 30 days only
        </Desc>
      </Content>
    </Wrapper>

  )
}

export default Category