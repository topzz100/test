import React from 'react'
import { Container, Content, List, ListItem, Logo, LogOut, Wrapper } from '../SideBar/SideBar.styles'

const SideBar = () => {
  return (
    <>
      <Wrapper>
        <Content>
            <Container>
            <Logo src='/images/cloudbank.png'/> 
              <List>
                <ListItem>
                  Home
                </ListItem>
                <ListItem>
                  Send Money
                </ListItem>
                <ListItem>
                  Investment
                </ListItem>
                <ListItem>
                  Loan
                </ListItem>
                <ListItem>
                  Cards
                </ListItem>
                <ListItem>
                  Transactions
                </ListItem>
                <ListItem>
                  Marketplace
                </ListItem>
                <ListItem>
                  Settings
                </ListItem>
              </List>
            </Container>

            <LogOut>
              <p>Log Out</p>
            </LogOut>
         
        </Content>
      </Wrapper> 
    </>
  )
}

export default SideBar