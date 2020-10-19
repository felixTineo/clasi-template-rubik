import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../../_context';
import { FormProperty } from '../../_components/forms'
import { Container } from 'react-grid-system';
import RateBar from '../../_layout/header/rate-bar';

const VeryMainCont = styled.section`
  background-image: url(${props => props.theme.home.hero.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  //color: #fff;
`
const MainCont = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  @media(min-width: 768px){
    min-height: calc(100vh - 81px);    
  }
`

const Title = styled.h1`
  font-weight: 300;
  max-width: 95%;
  font-size: 32px;
  text-align: left;
  @media(min-width: 768px){
    max-width: 50%;
    font-size: 50px;
  }
`
const DownButton = styled.div`
  //text-decoration: none;
  position: absolute;
  bottom: 30px;
`
const SvgCont = styled.svg`
  stroke: #fff;
  transition: 250ms ease;
  ${DownButton}:hover & {
    stroke: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const state = useContext(Context);

  return(
    <VeryMainCont>
      <Container>
      <MainCont>
        <Title>
          {state.home.hero.title}
        </Title>
        <FormProperty shadow />
        <DownButton href="#properties">
          <RateBar />
{/*          <SvgCont width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="14.5"/>
            <path d="M19.2426 14L15 18.2427L10.7574 14" strokeLinecap="round" strokeLinejoin="round"/>
  </SvgCont>*/}
        </DownButton>
      </MainCont>
      </Container>      
    </VeryMainCont>
  )
}