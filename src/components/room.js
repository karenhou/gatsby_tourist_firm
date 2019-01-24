import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import CarouselRoomPix from './carouselRoomPix'

const MyContainer = styled.section`
  margin-top: 5em;
  margin-bottom: 5em;
  font-family: 'Lobster', cursive;
  color: #0843c0;
`

export default props => (
  // <h1>Hello</h1>
  <StaticQuery
    query={graphql`
      query {
        allContentfulTouristFirm {
          edges {
            node {
              roomType
              ppr
              price
              photo {
                id
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <MyContainer id="room" className="text-center">
          <Container>
            <h1>Rooms</h1>
            <h6 style={{ marginBottom: '1em', color: 'gray' }}>
              We have wide range of rooms to accompany your needs
            </h6>
            {/* <Carousel style={{ background: 'white' }} showStatus={false}> */}
            <CarouselRoomPix data={data.allContentfulTouristFirm.edges} />
            {/* </Carousel> */}
          </Container>
        </MyContainer>
      )
    }}
  />
)
