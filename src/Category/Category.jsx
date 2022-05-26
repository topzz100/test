import React from 'react'
import { Content, Desc, Image, Text, Wrapper } from './Category.styles'

const Category = ({header, img, desc}) => {
  return (
    <Wrapper>
      <Content>
        <Image src={img}/>
        <Text>
          {header}
        </Text>
        <Desc>
          {desc}
        </Desc>
      </Content>
    </Wrapper>

  )
}

export default Category
