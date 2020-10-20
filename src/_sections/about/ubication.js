import React, { useContext, Fragment } from 'react';
import Context from '../../_context';
import styled from 'styled-components';
import { Container, Row, Col, Hidden, Visible } from 'react-grid-system';
import Contact from '../home/contact';
import ContactLight from './contact';

const MainCont = styled.section`
  padding: 4rem 0;
`
const Title = styled.p`
  height: 100%;
  background-color: ${props => props.theme.main.primaryColor};
  color: #fff;
  padding: 2rem;
  //font-weight: bold;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  //font-size: 2rem;
`
const Map = styled.img`
  width: 100%;
  height: 304px;
  object-position: center;
  object-fit: cover;
`

export default ({ noContact })=> {
  const state = useContext(Context).about.ubication;
  return(
    <Container>
    <MainCont>
      <Row nogutter>
        <Col xs={12} >
          <Title>
            {state.title}
          </Title>
        </Col>
        <Col xs={12} >
          <Map src="/map.png" />          
        </Col>        
      </Row>
      {
        !noContact &&(
          <Fragment>
          <Visible xs>
            <Row>
              <Col light xs={12}>
                <Contact noMargin />
              </Col>
            </Row>
          </Visible>       
          <Hidden xs>
            <ContactLight />
          </Hidden>
          </Fragment>
        )
      }
    </MainCont>
    </Container>
  )
}