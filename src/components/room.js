import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import CarouselRoomPix from './carouselRoomPix'
import { Trans } from 'react-i18next'

const MyContainer = styled.section`
  margin-top: 5em;
  margin-bottom: 5em;
  font-family: 'Lobster', cursive;
  color: #0843c0;
`

export default props => (
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
            <h1>
              <Trans>Rooms</Trans>
            </h1>
            <h6 style={{ marginBottom: '1em', color: 'gray' }}>
              <Trans>We have wide range of rooms to accompany your needs</Trans>
            </h6>
            <CarouselRoomPix data={data.allContentfulTouristFirm.edges} />
          </Container>
        </MyContainer>
      )
    }}
  />
)
