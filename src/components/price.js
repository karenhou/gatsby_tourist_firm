import React, { useState } from 'react'
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
import { Trans } from 'react-i18next'

const MyContainer = styled.section`
  margin-top: 7em;
  margin-bottom: 5em;
  color: #0843c0;
  font-family: 'Ubuntu', sans-serif;
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
const Price = () => {
  const [activeTab, toggle] = useState('1')
  return (
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
                    <h1>
                      <Trans>Package Deal</Trans>
                    </h1>
                    <ul
                      className="pl-3"
                      style={{ color: 'gray', fontSize: 'larger' }}
                    >
                      <li>
                        <Trans>
                          125cc Scooter, 2 people per scooter, gasoline not
                          included
                        </Trans>
                      </li>
                      <li>
                        <Trans>Free breakfast + one meal @ our cafe</Trans>
                      </li>
                      <li>
                        <Trans>
                          Select one activity from the following Scuba diving,
                          Hot Spring, and Glass ship
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          Round trip pickup from the ferry terminal to hotel
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          Special guide for day and night tour around the island
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          Extra $400NTD per person need to be added during
                          holidays
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          Holiday include Saturdays and one day before any
                          public holidays
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          Motorcycle driver license issued by Taiwanese
                          government is needed，If you do not have one, please
                          rent electrical motorbikes(extra $200NTD per person)
                        </Trans>
                      </li>
                      <li>
                        <Trans>
                          If you rent electrical motorbike or electrical bike,
                          night tour will not be arranged due to circumstances
                        </Trans>
                      </li>
                      <li>
                        <Trans>Ferry Ticket</Trans>: $920NTD
                      </li>
                    </ul>
                    <a
                      href="mailto:lutihotel@gmail.com?cc=karen@youngmarch.com.tw?subject=Mail from Our Site&body=Please specify the desire date and room type, we'll get back to you soon. Or contact us through Line or WeChat for quicker response"
                      style={{ width: '100%' }}
                    >
                      <MyButton>
                        <Trans>Contact Us via email for details</Trans>
                      </MyButton>
                    </a>
                  </Row>
                </Col>
                <Col xs={12} lg={8}>
                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === '1',
                        })}
                        onClick={() => {
                          toggle('1')
                        }}
                      >
                        <h4>
                          2 <Trans>people</Trans>
                        </h4>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === '2',
                        })}
                        onClick={() => {
                          toggle('2')
                        }}
                      >
                        <h4>
                          3 <Trans>people</Trans>
                        </h4>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === '3',
                        })}
                        onClick={() => {
                          toggle('3')
                        }}
                      >
                        <h4>
                          4 <Trans>people</Trans>
                        </h4>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === '4',
                        })}
                        onClick={() => {
                          toggle('4')
                        }}
                      >
                        <h4>
                          6 <Trans>people</Trans>
                        </h4>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab}>
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

export default Price
