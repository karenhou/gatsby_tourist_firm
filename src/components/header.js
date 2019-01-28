import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'
import { Trans } from 'react-i18next'

const MyHeader = styled.header`
  font-family: 'Bungee Inline', cursive;
`

const MyNav = styled.h5`
  color: blue;
  &:hover {
    color: #0843c0;
  }
  @media only screen and (min-width: 768px) {
    &:hover {
      border-bottom: 4px solid #0843c0;
    }
  }

  @media only screen and (max-width: 767px) {
    &:hover {
      border-bottom: none;
    }
  }
`

export default props => {
  const [isOpen, set] = useState(true)
  return (
    <MyHeader>
      <Navbar dark expand="md">
        <NavbarBrand style={{ flexGrow: '1' }}>
          <StaticQuery
            query={graphql`
              query {
                placeholderImage: file(relativePath: { eq: "luti_logo1.png" }) {
                  childImageSharp {
                    fixed(width: 60) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            `}
            render={data => (
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            )}
          />
        </NavbarBrand>
        <NavbarToggler onClick={() => set(state => !state)} aria-label='NavToggler'/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#service">
                <MyNav>
                  <Trans>Service</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#room">
                <MyNav>
                  <Trans>Rooms</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#attraction">
                <MyNav>
                  <Trans>Attraction</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#price">
                <MyNav>
                  <Trans>Package</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => props.onLanChange('en')}>
                <MyNav>
                  <Trans>EN</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={() => props.onLanChange('cn')}>
                <MyNav>
                  <Trans>中文</Trans>
                </MyNav>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar />
          </Nav>
        </Collapse>
      </Navbar>
    </MyHeader>
  )
}
