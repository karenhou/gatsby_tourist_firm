import React, { Component } from 'react'
import {
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container,
} from 'reactstrap'
import classnames from 'classnames'
import PriceTabeContent from './priceTabContent'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

const MyContainer = styled.section`
  margin-top: 7em;
  margin-bottom: 5em;
  color: #0843c0;
  font-family: 'Lobster', cursive;
`

const MyButton = styled.button`
  width: 100%;
  color: white;
  background: #0843c0;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background: white;
    color: #0843c0;
    border: #0843c0 solid 1px;
  }
`

class Price extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1',
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  render() {
    return (
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
                  dayPackage2
                  dayPackage3
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <MyContainer id="price">
              <Container>
                <Row className="ml-1">
                  <Col xs={12} lg={4}>
                    <Row className="mb-3 mr-1">
                      <h1>Package Deal</h1>
                      <ul className="pl-3" style={{ color: 'gray' }}>
                        <li>
                          125cc Scooter, 2 people per scooter, gasoline not
                          included
                        </li>
                        <li>Free breakfast + one meal @ our cafe</li>
                        <li>
                          Select one activity from the following Scuba diving,
                          Hot Spring, and Glass ship
                        </li>
                        <li>
                          Round trip pickup from the ferry terminal to hotel
                        </li>
                        <li>
                          Special guide for day and night tour around the island
                        </li>
                        <li>
                          Extra $400NTD per person need to be added during
                          holidays
                        </li>
                        <li>
                          Holiday include Saturdays and one day before any
                          public holidays
                        </li>
                        <li>
                          Motorcycle driver license issued by Taiwanese
                          government is needed，If you do not have one, please
                          rent electrical motorbikes(extra $200NTD per person)
                        </li>
                        <li>
                          If you rent electrical motorbike or electrical bike,
                          night tour will not be arranged due to circumstances
                        </li>
                        <li>Ferry Ticket: $920 NTD</li>
                      </ul>
                      <a
                        href="mailto:someone@yoursite.com?subject=Mail from Our Site&body=Please specify the desire date and room type, we'll get back to you soon. Or contact us through Line or wechat for quicker response"
                        style={{ width: '100%' }}
                      >
                        <MyButton>Contact Us via email for details</MyButton>
                      </a>
                    </Row>
                  </Col>
                  <Col xs={12} lg={8}>
                    <Nav tabs>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === '1',
                          })}
                          onClick={() => {
                            this.toggle('1')
                          }}
                        >
                          2 people
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === '2',
                          })}
                          onClick={() => {
                            this.toggle('2')
                          }}
                        >
                          3 people
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === '3',
                          })}
                          onClick={() => {
                            this.toggle('3')
                          }}
                        >
                          4 people
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: this.state.activeTab === '4',
                          })}
                          onClick={() => {
                            this.toggle('4')
                          }}
                        >
                          6 people
                        </NavLink>
                      </NavItem>
                    </Nav>

                    <TabContent activeTab={this.state.activeTab}>
                      {/* <PriceTabeContent ppr={2} index={"1"} /> */}
                      <PriceTabeContent
                        data={data.allContentfulTouristFirm.edges.filter(
                          edge => edge.node.ppr === 2
                        )}
                        index={'1'}
                      />
                      <PriceTabeContent
                        data={data.allContentfulTouristFirm.edges.filter(
                          edge => edge.node.ppr === 3
                        )}
                        index={'2'}
                      />
                      <PriceTabeContent
                        data={data.allContentfulTouristFirm.edges.filter(
                          edge => edge.node.ppr === 4
                        )}
                        index={'3'}
                      />
                      <PriceTabeContent
                        data={data.allContentfulTouristFirm.edges.filter(
                          edge => edge.node.ppr === 6
                        )}
                        index={'4'}
                      />
                      {/* <PriceTabeContent ppr={3} index={"2"} />
                <PriceTabeContent ppr={4} index={"3"} />
                <PriceTabeContent ppr={6} index={"4"} /> */}
                    </TabContent>
                  </Col>
                </Row>
              </Container>
            </MyContainer>
          )
        }}
      />
    )
  }
}

export default Price
