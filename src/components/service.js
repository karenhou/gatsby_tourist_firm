import React from 'react'
import styled from 'styled-components'
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import Slide from 'react-reveal/Slide'

const MyContainer = styled.section`
  padding-bottom: 5em;
  padding-top: 5em;
  color: white;
  font-family: 'Lobster', cursive;
`

const Service = () => {
  return (
    <MyContainer id="service">
      <Container className="justify-content-center my-auto">
        <Row className="justify-content-center mb-5">
          <h1 style={{ color: '#0843c0' }}>Services we provide...</h1>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Slide bottom>
              <Card
                className="text-center"
                style={{
                  height: '100%',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-utensils fa-4x my-2" />
                  <CardTitle>
                    <h2>Dinning</h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    Cafe <br />
                    BBQ <br />
                    Book restaurants
                  </CardText>
                </CardBody>
              </Card>
            </Slide>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-3">
            <Slide bottom id="staying">
              <Card
                className="text-center"
                style={{
                  height: '321px',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-home fa-4x my-2" />
                  <CardTitle>
                    <h2>Staying</h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    Assist Booking Hostels <br />
                    Hotels
                  </CardText>
                </CardBody>
              </Card>
            </Slide>
          </Col>

          <Col xs={12} md={6} lg={4} className="mb-3">
            <Slide bottom>
              <Card
                className="text-center"
                style={{
                  height: '100%',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-ship fa-4x my-2" />
                  <CardTitle>
                    <h2>Travelling</h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    Arrange Itinerary <br />
                    Q&A
                    <br /> Assist booking ferries
                  </CardText>
                </CardBody>
              </Card>
            </Slide>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  )
}
export default Service
