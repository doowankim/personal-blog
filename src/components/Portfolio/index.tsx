import React from "react"
import styled, { keyframes } from "styled-components"

import Header from "../Header"

const Portfolio = () => {
  return (
    <Container>
      <Header />
      <Heading>
        <HeadingText>About me</HeadingText>
      </Heading>
      <HeadingLine>
        <p>저를 소개합니다.</p>
      </HeadingLine>
      <DescriptionBox>
        <Image src="/images/avatar.jpeg" alt="avatar" />
        <Description>
          <h3>
            <u>안녕하세요 김두완입니다</u>
          </h3>
          <br />
          <div>
            늘 성장하는 사람, 주니어 개발자 김두완입니다.
            <br />
            <span>
              저는 끊임없는 고민을 통해 주어진 문제를 해결하며 성장해나가는 것을
              좋아합니다. 문제를 정의하고 해결방안을 고민하고 서치하며, 정리한
              방안들을 테스트했습니다. 결과적으로 해결한 부분은 따로 정리해 두며
              이러한 과정을 통해 행복함을 느낍니다.
            </span>
            <br />
            <br />
            저는 제 목표를 <b>'늘 성장하는 개발자'</b>로 삼아서 꾸준히 공부하여{" "}
            <b>'항상 성장하는 개발자'</b>로 남고 싶습니다.
          </div>
        </Description>
      </DescriptionBox>
    </Container>
  )
}

const FadeInUp = keyframes`
  0% {
    opacity: 0;
    bottom: -60px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
`

const Container = styled.div`
  width: 100%;
  height: 90vh auto;
  background: #f2eded;
`

const Heading = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
`

const HeadingText = styled.h2`
  font-size: 38px;
  text-transform: uppercase;
  text-align: center;
`

const HeadingLine = styled.div`
  margin: 0 auto;
  display: block;
  height: 1px;
  width: 107px;
  background: #333;
  margin-top: 10px;
  margin-bottom: 20px;
`

const DescriptionBox = styled.div`
  display: flex;
  animation: ${FadeInUp} 1.2s;
  position: relative;
  padding-top: 30px;
  margin-top: 50px;
  width: 1000px;
  left: 50%;
  transform: translateX(-48%);
  height: 90vh auto;
  box-sizing: border-box;
`

const Image = styled.img`
  width: 250px;
  height: 300px;
  border-radius: 10px;
  transform: translateX(0%);
`

const Description = styled.h2`
  color: #777;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  font-style: italic;
  margin-left: 30px;
`

export default Portfolio
