import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderBox>
      <NavbarDropdown>
        <HeaderMenu>
          <Icon className="fas fa-bars" />
        </HeaderMenu>
        <NavbarDropdownContent>
          <div style={{ paddingTop: "40px" }}>
            <SLink to="/main">HOME</SLink>
          </div>
          <div style={{ marginTop: "25px" }}>
            <SLink to="/post">POST</SLink>
          </div>
          <div style={{ marginTop: "25px" }}>
            <SLink to="/profile">PROFILE</SLink>
          </div>
          <div style={{ marginTop: "25px" }}>
            <SLink to="/portfolio">PORTFOLIO</SLink>
          </div>
        </NavbarDropdownContent>
      </NavbarDropdown>
      <HeaderLogo>
        <Link to="/main">
          <LogoImage src="/images/brunch_logo.png" alt="brunchLogo" />
        </Link>
      </HeaderLogo>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  height: 80px;
  border: 2px solid #ddd;
  background-color: #ffffff;
`

const HeaderMenu = styled.div`
  position: absolute;
  float: left;
  margin-top: 30px;
  margin-left: 30px;
  cursor: pointer;
`

const HeaderLogo = styled.div`
  text-align: center;
`

const LogoImage = styled.img`
  width: 250px;
  height: 70px;
`

const NavbarDropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: none;
  margin-top: 50px;
  margin-left: 12px;
  border-radius: 5px;
  min-width: 130px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px 10px 10px;
  z-index: 1;
`

const NavbarDropdown = styled.div`
  position: relative;
  width: 100px;

  &:hover ${NavbarDropdownContent} {
    display: block;
  }
`

const SLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`

const Icon = styled.i``

export default Header
