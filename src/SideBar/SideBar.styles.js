import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 2;
  height: 100vh;
  width: 100%;
  `;

export const Content = styled.div`
background: white;
  width: 100%;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
 
`;
export const Logo = styled.img`
 
 `;
export const List = styled.ul`
  width: 100%;
  margin-top: 20px;
`;
export const ListItem = styled.li`
  padding: 10px 0;
  span{
    margin-left: 10px;
  }
`;
export const LogOut = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  p{
    color: red;
    display: flex;
    margin-left: 10px;
   
  }
`