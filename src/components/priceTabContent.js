import React from 'react'
import { TabPane, Card, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Img = styled.img`
  height: 100%;
  width: 100%;
`

const Span = styled.span`
  color: gray;
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
                    {edge.node.roomType} - ${edge.node.price} per night
                  </h3>
                  {/* <h5>{room.description}</h5> */}

                  <Span>
                    2 days, 1 night: ${edge.node.dayPackage2} per person
                  </Span>
                  <br />
                  <Span>
                    3 days, 2 night: ${edge.node.dayPackage3} per person
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
