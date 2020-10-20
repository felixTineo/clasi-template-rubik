import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { PropertyCard as Card } from '../../_components/cards';
import OfficeContext from '../../_context';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const query = (officeId)=> `
  query {
    paginateProperties(input:{
      officeId: "${officeId}"
    }){
      totalRegisters
      totalResults
      page
      properties{
        id
        code
        operation
        currency
        value
        mainImage
        title
        status
        ubication{ address }
        characteristics{
          id
          name
          value
        }
      }
    }
  }
`
const NavPaginate = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`
const NavArrow = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #919191;
  transition: 250ms ease;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`
const NavNumber = styled(NavArrow)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: #919191;
  margin: 0 1rem;
  &:hover{
    color: ${props => props.theme.main.primaryColor};
  }
`

export default ()=> {
  const officeId = useContext(OfficeContext).office.officeId;
  const propertyList = useContext(OfficeContext).home.properties.items;
  const properties = [...propertyList, ...propertyList];
  
  const handleQuery = async()=> {
    const options = {
      method: 'POST',
      headers: { "Content-Type": "application/json"  },
      body: JSON.stringify({ query: query(officeId) }),
      mode: 'cors',
    }
    const url = 'http://52.38.140.134:4000/';
    const res = await fetch(url, options);
    const result = await res.json();
  }

  useEffect(()=>{
    //handleQuery();
  },[]);

  return(
    <Container>
      <div style={{ paddingTop: '5rem' }}>
        <Row>
          {
            properties.slice(0, 12).map(p => (
              <Col key={p.mainImage} xs={12} md={4} style={{ margin: "1rem 0" }}>
                <Card {...p} />
              </Col>
            ))
          }
          <Col xs={12}>
            <NavPaginate>
              <NavArrow>
                <ArrowLeftOutlined />
              </NavArrow>
              <NavNumber>
                1
              </NavNumber>
              <NavNumber>
                2
              </NavNumber>
              <NavNumber>
                3
              </NavNumber>
              <NavNumber>
                4
              </NavNumber>
              <NavNumber>
                5
              </NavNumber>
              <NavArrow>
                <ArrowRightOutlined />
              </NavArrow>
            </NavPaginate>
          </Col>
        </Row>
      </div>
    </Container>
  )
}