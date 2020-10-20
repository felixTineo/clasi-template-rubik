import React from 'react';
import Layout from '../_layout';
import Hero from '../_sections/property/hero';
import PropertyUser from '../_sections/property/property-user';
import Ubication from '../_sections/property/ubication';
import Properties from '../_sections/home/properties';
import { Row, Col, Container, Visible } from 'react-grid-system';
import Contact from '../_sections/property/property-user/user';
import Interaction from '../_sections/property/interaction-buttons';

export default ()=> (
  <Layout>
    <Hero />
    <PropertyUser />
    <Ubication />
    <Properties noMargin />
    <Visible xs>
      <Container>
        <Row>
          <Col xs={12}>
            <Contact />
          </Col>
        </Row>
      </Container>
    </Visible>
  </Layout>
)