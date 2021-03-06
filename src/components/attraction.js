import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Card, CardTitle, CardText, Container, Col, Row } from 'reactstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import { Trans } from 'react-i18next'

const MyContainer = styled.section`
  padding-top: 2em;
  color: #0843c0;
  font-family: 'Ubuntu', sans-serif;
`
const Img = styled.img`
  height: 300px;
  width: 100%;
`

const H4 = styled.h4`
  text-align: center;
  color: gray;
`

class AttractionItems extends Component {
  render() {
    const { data } = this.props
    return data.map((place, index) => {
      return (
        <Col xs={12} md={12} lg={6} key={index} className="mb-2">
          <Flippy
            style={{ cursor: 'pointer' }}
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            ref={r => (this.flippy = r)} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
          >
            <FrontSide style={{ padding: 0 }}>
              <Card body>
                <Img src={place.node.photo.file.url} alt={place.node.name} />
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, height: '100%' }}>
              <Card body style={{ height: '100%' }}>
                <CardTitle>{place.node.name}</CardTitle>
                <CardText>{place.node.description}</CardText>
              </Card>
            </BackSide>
          </Flippy>
        </Col>
      )
    })
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allContentfulAttractions {
          edges {
            node {
              name
              description
              photo {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <MyContainer id="attraction">
        <Container>
          <Row className="justify-content-center">
            <h1>
              <Trans>Attractions</Trans>
            </h1>
          </Row>

          <Row className="justify-content-center mb-3">
            <H4>
              <Trans>
                Here are some of the popular tourist spots on Green Island
              </Trans>
            </H4>
          </Row>

          <Row>
            <AttractionItems data={data.allContentfulAttractions.edges} />
          </Row>
        </Container>
      </MyContainer>
    )}
  />
)
