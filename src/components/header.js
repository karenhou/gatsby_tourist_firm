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

const MyHeader = styled.header`
  font-family: 'Bungee Inline', cursive;
`

const Logo = styled.h1`
  color: blue;
  font-family: 'Lobster', cursive;
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
        <NavbarBrand href="/">
          <Logo>Luti</Logo>
        </NavbarBrand>
        <NavbarToggler onClick={() => set(state => !state)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#service">
                <MyNav>Service</MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#room">
                <MyNav>Rooms</MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#attraction">
                <MyNav>Attraction</MyNav>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#price">
                <MyNav>Package</MyNav>
              </NavLink>
            </NavItem>
            {/* <NavItem>
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
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar />
          </Nav>
        </Collapse>
      </Navbar>
    </MyHeader>
  )
}
