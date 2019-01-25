import React, { Component } from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Card, CardTitle, CardText, Container, Col, Row } from 'reactstrap'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const MyContainer = styled.section`
  padding-top: 2em;
  color: #0843c0;
  font-family: 'Lobster', cursive;
`
const Img = styled.img`
  height: 300px;
  width: 100%;
`

class AttractionItems extends Component {
  render() {
    const { data } = this.props
    return data.allContentfulAttractions.edges.map((edge, index) => {
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
                <Img src={edge.node.photo.file.url} alt={edge.node.name} />
              </Card>
            </FrontSide>
            <BackSide style={{ padding: 0, height: '100%' }}>
              <Card body style={{ height: '100%' }}>
                <CardTitle>{edge.node.name}</CardTitle>
                <CardText>{edge.node.description}</CardText>
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
            <h1>Attractions</h1>
          </Row>

          <Row className="justify-content-center mb-3">
            <h6 style={{ color: 'gray' }}>
              Here are some of the popular tourist spots on Green Island{' '}
            </h6>
          </Row>

          <Row>
            <AttractionItems data={data} />
            {/* {flipContent} */}
          </Row>
        </Container>
      </MyContainer>
    )}
  />
)
