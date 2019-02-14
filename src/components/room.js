import React from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import CarouselRoomPix from './carouselRoomPix'
import { Trans } from 'react-i18next'

const MyContainer = styled.section`
  margin-top: 5em;
  margin-bottom: 5em;
  font-family: 'Ubuntu', sans-serif;
  color: #0843c0;
`
const H4 = styled.h4`
  text-align: center;
  color: gray;
  margin-bottom: 1em;
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
            <H4>
              <Trans>We have wide range of rooms to accompany your needs</Trans>
            </H4>
            <CarouselRoomPix data={data.allContentfulTouristFirm.edges} />
          </Container>
        </MyContainer>
      )
    }}
  />
)
