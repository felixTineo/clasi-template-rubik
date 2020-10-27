import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Context from '../../_context';

const MainCont = styled.section`
    background-image: url(${props => props.theme.about.hero.background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 0px;
    background-position-x: 0px;
    @media(min-width: 768px){
      background-position-y: -100px;
      background-position-x: 100px;
    }
`
const TitleCont = styled.div`
  position: relative;
  height: calc(100vh - 81px);
  display: flex;
  justify-content: center;
  align-items: center;
`
const Title = styled.h1`
  position: relative;
  //color: #fff;
  padding: 1rem;
  text-align: left;
  margin: 0;
  width: 100%;
  font-weight: 300;
  @media(min-width: 576px){
    text-align: left;
    width: 70vw;
  }
`
const Image = styled.img`
  width: 50vw;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export default ()=> {
  return(
    <MainCont>
      <Container>
        <TitleCont>
          <Title className="animate__animated animate__fadeInUp">
            Noticias
          </Title>
        </TitleCont>        
      </Container>
    </MainCont>
  )
}