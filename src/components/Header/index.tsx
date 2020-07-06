import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderBox>
      <HeaderLogo>
        <Link to="/main">
          <LogoImage src="/images/brunch_logo.png" alt="brunchLogo" />
        </Link>
      </HeaderLogo>
      <IconWrapper href="/profile">
        <ProfileIcon className="fas fa-address-card" />
      </IconWrapper>
      <IconWrapper2 href="https://github.com/doowankim">
        <GitIcon className="fab fa-github" />
      </IconWrapper2>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  height: 80px;
  border: 2px solid #ddd;
  background-color: #ffffff;
`

const HeaderLogo = styled.div`
  text-align: center;
`

const LogoImage = styled.img`
  width: 250px;
  height: 70px;
`

const IconWrapper = styled.a`
  margin-top: -50px;
  margin-right: 90px;
  font-size: 30px;
  float: right;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`

const IconWrapper2 = styled.a`
  margin-top: -50px;
  margin-right: 30px;
  font-size: 30px;
  float: right;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`

const GitIcon = styled.i`
  cursor: pointer;
`

const ProfileIcon = styled.i`
  cursor: pointer;
`

export default Header
