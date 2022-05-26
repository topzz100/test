import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: white;
  padding: 15px;
  width: 100%;
  height: 270px;
  margin-bottom: 10px;
  @media(max-width: 760px){
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
  @media(max-width: 760px){
    height: 100px;
  }
`
export const Text = styled.h5`
  margin-top: 15px;
  text-align: center;
  font-size: 0.9rem;
`
export const Desc = styled.p`
  margin-top: 15px;
  color: black;
  text-align: center;
  font-size: 0.8rem;
`
