import React from 'react';
import styled from 'styled-components';
import { Row, Col, Visible } from 'react-grid-system';
import InteractionButtons from '../interaction-buttons';

const MainCont = styled.div`
  background-color: #fff;
  min-height: 100%;
  @media(min-width: 768px){
    padding: 2rem 4rem;
  }
`
const OperationCode = styled.p`
  color: ${props => props.theme.main.primaryColor};
  font-weight: bold;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 50px;
`
const Price = styled(Title)`
  color: ${props => props.theme.main.primaryColor};
`
const UbicationCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  margin-bottom: 2rem;
  @media(min-width: 768px){
    margin: 0;
  }
`
const SvgCont = styled.svg`
  fill: ${props => props.theme.main.primaryColor};
`


export default ({ description })=> {

  return(
    <MainCont>
      <Row>
        <Col xs ={12}>
          <OperationCode>
            {`${description.operation}-COD.: ${description.code}`}
          </OperationCode>
          <Title>
            {description.title}
          </Title>
          <Price>
            {`${description.currency} ${description.value}`}
          </Price>
          <UbicationCont>
            <SvgCont version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path d="M10 20c-0.153 0-0.298-0.070-0.393-0.191-0.057-0.073-1.418-1.814-2.797-4.385-0.812-1.513-1.46-2.999-1.925-4.416-0.587-1.787-0.884-3.472-0.884-5.008 0-3.308 2.692-6 6-6s6 2.692 6 6c0 1.536-0.298 3.22-0.884 5.008-0.465 1.417-1.113 2.903-1.925 4.416-1.38 2.571-2.74 4.312-2.797 4.385-0.095 0.121-0.24 0.191-0.393 0.191zM10 1c-2.757 0-5 2.243-5 5 0 3.254 1.463 6.664 2.691 8.951 0.902 1.681 1.809 3.014 2.309 3.71 0.502-0.699 1.415-2.040 2.318-3.726 1.223-2.283 2.682-5.687 2.682-8.935 0-2.757-2.243-5-5-5z"></path>
              <path d="M10 9c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zM10 4c-1.103 0-2 0.897-2 2s0.897 2 2 2c1.103 0 2-0.897 2-2s-0.897-2-2-2z"></path>
            </SvgCont>
            <span>
              {`${description.ubication.region} / ${description.ubication.commune}`}
            </span>
          </UbicationCont>
        </Col>
        <Visible xs>
          <InteractionButtons />
        </Visible>
      </Row>
    </MainCont>
  )
}