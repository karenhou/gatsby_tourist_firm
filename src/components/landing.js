import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import Header from './header'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const MyContainer = styled.section`
  color: white;
  font-family: 'Lobster', cursive;
`
const H1 = styled.h1`
  font-size: 200px;

  @media only screen and (min-width: 571px) and (max-width: 764px) {
    font-size: 150px;
    text-align: left;
  }

  @media only screen and (max-width: 570px) {
    font-size: 100px;
    text-align: left;
  }
`
class Landing extends Component {
  render() {
    return (
      <div>
        <MyContainer id="home">
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "turtle.jpg" }) {
                  childImageSharp {
                    fluid(maxWidth: 1440) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img
                fluid={data.placeholderImage.childImageSharp.fluid}
                style={{
                  backgroundSize: 'cover',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: '110vh',
                }}
              />
            )}
          />
          <Header onLanChange={x => this.props.onLanChange(x)} />
          <Container>
            <Row style={{ height: '100vh' }}>
              <Col xs={12} className="text-center m-auto">
                <Fade big>
                  <H1>Luti</H1>
                  <H1>Seashore</H1>
                </Fade>
              </Col>
            </Row>
          </Container>
        </MyContainer>
      </div>
    )
  }
}

export default Landing
