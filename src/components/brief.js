import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col, Card } from 'reactstrap'
import Slide from 'react-reveal/Slide'

const MyContainer = styled.section`
  margin-top: 3em;
  margin-bottom: 3em;
  color: #0843c0;
  font-family: 'Lobster', cursive;
`
const Desc = styled.p`
  color: gray;
`

const Brief = () => {
  return (
    <MyContainer id="brief">
      <Container>
        <Row className="justify-content-center">
          <h1>We're here for you</h1>
        </Row>
        <Row
          className="justify-content-center"
          style={{ marginBottom: '1em', color: 'gray' }}
        >
          <h6>We exist to enhance your experience at Green Island</h6>
        </Row>

        <Row className="m-auto">
          <Col xs={12} lg={6}>
            <Slide left cascade>
              <Row style={{ height: '150px' }}>
                <Col
                  xs={2}
                  className="align-self-center"
                  style={{ textAlign: 'center', marginLeft: '1.2em' }}
                >
                  <i
                    className="fas fa-check-square fa-2x"
                    style={{
                      background: '#0843c0',
                      color: 'white',
                      padding: '20px',
                      borderRadius: '50%',
                      width: '72px',
                    }}
                  />
                </Col>
                <Col className="my-1 ml-4 mr-2">
                  <h3 className="mt-3">Professional</h3>
                  <Desc>We provide the best customer service around</Desc>
                </Col>
              </Row>

              <Row style={{ height: '150px' }}>
                <Col
                  xs={2}
                  style={{ textAlign: 'center', marginLeft: '1.2em' }}
                  className="align-self-center"
                >
                  <i
                    className="fas fa-clipboard fa-2x"
                    style={{
                      background: '#0843c0',
                      color: 'white',
                      padding: '20px',
                      borderRadius: '50%',
                      width: '72px',
                    }}
                  />
                </Col>
                <Col className="my-1 ml-4 mr-2">
                  <h3 className="mt-3">Proficiency</h3>
                  <Desc>
                    We've been doing this for a long time, so we're very good at
                    what we're doing
                  </Desc>
                </Col>
              </Row>

              <Row style={{ height: '150px' }}>
                <Col
                  xs={2}
                  style={{ textAlign: 'center', marginLeft: '1.2em' }}
                  className="align-self-center"
                >
                  <i
                    className="fas fa-heart fa-2x"
                    style={{
                      background: '#0843c0',
                      color: 'white',
                      padding: '20px',
                      borderRadius: '50%',
                      width: '72px',
                    }}
                  />
                </Col>
                <Col className="my-1 ml-4 mr-2">
                  <h3 className="mt-3">Passion</h3>
                  <Desc>
                    We were travellers once, but then we found this place and
                    fell in love with it, so we had to stay
                  </Desc>
                </Col>
              </Row>
            </Slide>
          </Col>
          <Col xs={12} lg={6}>
            <Slide right>
              <Card
                className="mx-auto"
                style={{
                  height: '450px',
                  width: '100%',
                  background:
                    'url("https://img3.okgo.tw/store/info/11282/b20180505101416_11282_0.jpg") center no-repeat',
                  borderRadius: '20px',
                  boxShadow:
                    '0 4px 8px 0 rgba(0, 0, 0, 0.04), 0 6px 20px 0 rgba(0, 0, 0, 0.22)',
                }}
              />
            </Slide>
          </Col>
        </Row>
      </Container>
    </MyContainer>
  )
}
export default Brief
