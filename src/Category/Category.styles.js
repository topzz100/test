import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  padding: 20px;
  width: 100%;
  height: 250px;
  @media(max-width: 700px){
    height: 300px;
  }
`
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 55%;
  height: 110px;
`
export const Text = styled.h5`
  margin-top: 20px;
  text-align: center;
`
export const Desc = styled.p`
  margin-top: 20px;
  color: black;
  text-align: center;
`
