import React, { Fragment, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import { Select, Input } from '../inputs';
import { Button, IconButton } from '../buttons';
import { Visible, Hidden } from 'react-grid-system';

const Form = styled.form`
  width: 100%;
  border-radius: 6px;
  padding: 0 15px;
  margin-bottom: 1rem;
  animation-delay: 1s;
  @media(min-width: 768px){
    width: ${props => props.block ? "100%" : "80%"};
    padding: 0;
    padding-left: 5px;
    background-color: #fff;
    box-shadow: ${props => props.shadow && "0px 0px 1px rgba(0, 0, 0, .12), 0px 0px 2px rgba(0, 0, 0, .12), 0px 4px 4px rgba(0, 0, 0, .12), 0px 8px 8px rgba(0, 0, 0, .12)"};
    margin-bottom:0;
  }  
`

export default ({ block, shadow, className })=> {
  const [byCode, setByCode] = useState(false);
  const onChangeByCode = useCallback(e => {
    if(e.target.value === "Código"){
      setByCode(true);
    } else {
      setByCode(false);
    }
  })
  return(
    <Form onSubmit={(e) => e.preventDefault()} block={block} shadow={shadow} className={className}>
      <Row gutterWidth={32} align="center">
        <Col xs={12} md={2}>
          <Select
            onChange={onChangeByCode}
            default="Buscar por"
            options={["Propiedad", "Código"]}
            primary
          />
        </Col>        
        {
          byCode
          ?(
            <Col xs={12} md={8}>
              <Input placeholder="Ingrese el código de la propiedad" />
            </Col>                    
          )
          :(
            <Fragment>
              <Col xs={12} md={2}>
                <Select
                  default="Propiedad"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  primary
                />
              </Col>
              <Col xs={12} md={2}>
                <Select
                  default="Operación"
                  options={["opcion 1", "opcion 2", "opcion 3"]}
                  primary
                />
              </Col>    
              <Col xs={12} md={4}>
                <Input placeholder="Comuna" />
              </Col>        
            </Fragment>
          )
        }
        <Col xs={12} md={2}>
          <Hidden xs>
            <IconButton primary>
              <img src="/icons/search.svg" alt="buscar" />
            </IconButton>
          </Hidden>
          <Visible xs>
            <Button primary block>
              <img src="/icons/search.svg" alt="buscar" style={{ marginRight: "1rem" }} />
              Buscar
            </Button>
          </Visible>
        </Col>
      </Row>
    </Form>
  )
}