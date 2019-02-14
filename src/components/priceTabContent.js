import React from 'react'
import { TabPane, Card, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { Trans } from 'react-i18next'

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Span = styled.span`
  color: gray;
  font-size: larger;
`

const priceTabContent = ({ data, index }) => {
  return (
    <TabPane tabId={index}>
      <Row className="my-4">
        {data.map((edge, i) => {
          return (
            <Card
              key={i}
              style={{
                width: '100%',
              }}
            >
              <Row>
                <Col xs={12} md={5} className="mx-1 my-auto">
                  <Img
                    src={edge.node.photo.file.url}
                    alt={edge.node.roomType}
                  />
                </Col>
                <Col className="m-auto">
                  <h3>
                    <Trans>{edge.node.roomType}</Trans> - ${edge.node.price}{' '}
                    <Trans>per night</Trans>
                  </h3>
                  {/* <h5>{room.description}</h5> */}

                  <Span>
                    2 <Trans>days</Trans>, 1 <Trans>night</Trans>: $
                    {edge.node.dayPackage2} <Trans>per person</Trans>
                  </Span>
                  <br />
                  <Span>
                    3 <Trans>days</Trans>, 2 <Trans>night</Trans>: $
                    {edge.node.dayPackage3} <Trans>per person</Trans>
                  </Span>
                </Col>
              </Row>
            </Card>
          )
        })}
      </Row>
    </TabPane>
  )
}
export default priceTabContent
