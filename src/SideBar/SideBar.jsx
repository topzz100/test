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
                  <i class="fa-solid fa-house"></i>
                  <span>
                    Home
                  </span>
                  
                </ListItem>
                <ListItem>
                  <i class="fa-solid fa-comment-dollar"></i>
                  <span>
                    Send Money
                  </span>
                </ListItem>
                <ListItem>
                  <i class="fa-solid fa-boxes-stacked"></i>
                  <span>
                    Investmen 
                  </span>
                </ListItem>
                <ListItem color>
                  <i class="fa-solid fa-credit-card"></i>
                  <span>
                    Loan
                  </span>
                </ListItem>
                <ListItem>
                  <i class="fa-brands fa-cc-mastercard"></i>
                  <span>
                    Cards
                  </span>
                </ListItem>
                <ListItem>
                  <i class="fa-solid fa-file-invoice-dollar"></i>
                  <span>
                    Transactions 
                  </span>
                </ListItem>
                <ListItem>
                  <i class="fa-solid fa-shop"></i>
                  <span>
                    Marketplace
                  </span>
                </ListItem>
                <ListItem>
                  <i class="fa-solid fa-gear"></i>
                  <span>
                    Settings
                  </span>
                </ListItem>
              </List>
            </Container>

            <LogOut>
              <i class="fa-solid fa-power-off" style={{color: 'red'}}></i>
              <p>Log Out</p>
            </LogOut>
         
        </Content>
      </Wrapper> 
    </>
  )
}

export default SideBar
