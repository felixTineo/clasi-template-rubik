import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';

const MainCont = styled.div`
  //background-color: ${props => props.theme.main.primaryColor};
  color: ${props => props.theme.main.primaryColor};
  padding: .5rem 0;
  font-size: 12px;
  user-select: none;
`
const RatesCont = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #FFFFFF;
  @media(min-width: 768px){
    font-weight: normal;
    justify-content: flex-end;
    color: #FFFFFF;
  }
`
const RateItem = styled.li`
  margin-left: .30rem;
  &::after{
    content: " -"
  }
  @media(min-width: 768px){
    margin-left: .5rem;
    &::after{
      content: " /"
    } 
  }
`
const RateItemNoAfter = styled(RateItem)`
  &::after{
    content: ""
  }
  @media(min-width: 768px){
    &::after{
      content: ""
    } 
  }
`

export default ()=> {

  return(
    <MainCont>
      <Container>
        <RatesCont>
          <RateItem>
            UF $75875987
          </RateItem>
          <RateItem>
            UTM $75875987
          </RateItem>
          <RateItemNoAfter>
            Dólar $75875987
          </RateItemNoAfter>                    
        </RatesCont>
      </Container>
    </MainCont>
  )
}