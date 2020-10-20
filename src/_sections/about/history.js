import React, { useContext } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

const MainCont = styled.section`
  padding: 6rem 0;
  //min-height: 100vh;
`
const HistoryCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70vh;
  margin: 1rem 0;
`
const Title = styled.h2`
  color: ${props => props.theme.main.primaryColor};
`
const Description = styled.div`

`
const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  margin-top: 4rem;
  background-color:  ${props => props.theme.main.primaryColor};
  @media(min-width: 768px){
    height: 100%;
    margin-top: 0;
  }
`
const Image = styled.img`
  width: 90%;
  position: absolute;
  bottom: -5px;
`


export default ()=> {
  const state = useContext(Context).about;
  return(
    <MainCont>
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <HistoryCont>
              <Title>
                {state.history.title}
              </Title>
              <Description dangerouslySetInnerHTML={{__html: state.history.description}} />
            </HistoryCont>
          </Col>
          <Col xs={12} md={7}>
            <ImageContainer>
              <Image src="/phone.png" alt="historia" />
            </ImageContainer>
          </Col>                    
        </Row>
      </Container>
    </MainCont>
  )
}