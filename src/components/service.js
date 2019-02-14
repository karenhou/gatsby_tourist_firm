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
import { Trans } from 'react-i18next'

const MyContainer = styled.section`
  padding-bottom: 5em;
  padding-top: 5em;
  color: white;
  font-family: 'Ubuntu', sans-serif;
`

const Service = () => {
  return (
    <MyContainer id="service">
      <Container className="justify-content-center my-auto">
        <Row className="justify-content-center mb-5">
          <h1 style={{ color: '#0843c0' }}>
            <Trans>Services we provide...</Trans>
          </h1>
        </Row>
        <Row className="mt-3">
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Slide bottom>
              <Card
                className="text-center"
                style={{
                  height: '22.5em',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-utensils fa-4x my-2" />
                  <CardTitle>
                    <h2>
                      <Trans>Dinning</Trans>
                    </h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    <Trans>Cafe</Trans> <br />
                    <Trans>BBQ</Trans> <br />
                    <Trans>Book restaurants</Trans>
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
                  height: '22.5em',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-home fa-4x my-2" />
                  <CardTitle>
                    <h2>
                      <Trans>Staying</Trans>
                    </h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    <Trans>Assist Booking Hostels</Trans>
                    <br />
                    <Trans>Hotels</Trans>
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
                  height: '22.5em',
                  background: '#0843c0',
                  borderRadius: '20px',
                }}
              >
                <CardBody>
                  <i className="fas fa-ship fa-4x my-2" />
                  <CardTitle>
                    <h2>
                      <Trans>Travelling</Trans>
                    </h2>
                  </CardTitle>
                  <CardSubtitle
                    className="mx-2 text-center"
                    style={{ borderTop: '1px solid white' }}
                  />
                  <CardText
                    className="mx-5 my-4"
                    style={{ fontSize: 'x-large' }}
                  >
                    <Trans>Arrange Itinerary</Trans>
                    <br />
                    <Trans>Q&A</Trans>
                    <br />
                    <Trans>Assist booking ferries</Trans>
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
