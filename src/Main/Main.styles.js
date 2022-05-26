import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 10;
  height: 100%;
  width: 100%;
`; 
export const Content = styled.div`
  padding: 30px;
  position: relative;
  
  .menu{
    display: none;
    position: absolute;
    left: 30px;
    top: 15px;
    @media(max-width: 700px){
      display: block;
  }
  }
`
export const TopMenu = styled.div`
  display: none;
  width : 100%;
  img{
    width: 50px;
  }
  @media(max-width: 700px){
   display: flex;
   width: 100%;
   justify-content: center;
  }
`
export const Top = styled.div`
h4{
  color: black;
  margin-bottom: 10px;
}
  span{
    color: black;
  }
`
export const Categories = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const Box = styled.div`
  width: 24%;
  @media(max-width: 700px){
    width: 48%;
  }
`
