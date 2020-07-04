import React from "react"
import styled from "styled-components"
import Moment from "react-moment"

import Header from "../Header"

const Post = () => {
  const postData = [
    {
      id: 1,
      imageURL: "/images/wwdc.jpeg",
      title: "애플 2020 WWDC 발표하다!",
      tag: "Tech",
      text:
        "첫 번째, iOS14" +
        "홈 화면" +
        "너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다." +
        "검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-02T07:54:30.000Z",
    },
  ]
  return (
    <Container>
      <Header />
      {postData.map((postDetailData: any, index: number) => (
        <React.Fragment key={index}>
          <Wrapper>
            <DetailBox>
              <Title>{postDetailData.title}</Title>
              <Date>
                <Editor>by {postDetailData.nickname}</Editor>
                <span>・ </span>
                <Moment format="YYYY. MM. DD" style={{ marginLeft: "10px" }}>
                  {postDetailData.date}
                </Moment>
              </Date>
              <hr />
              <Image>
                <img src="/images/wwdc.jpeg" alt="wwdc" />
              </Image>
              <Text>{postDetailData.text}</Text>
              <TagBox>
                <DevTag>{postDetailData.tag}</DevTag>
              </TagBox>
            </DetailBox>
          </Wrapper>
        </React.Fragment>
      ))}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f4f2f2;
`

const Wrapper = styled.div`
  position: relative;
`

const DetailBox = styled.div`
  position: relative;
  width: 1000px;
  left: 50%;
  transform: translateX(-50%);
`

const Title = styled.div`
  font-size: 50px;
  margin-top: 20px;
`

const Editor = styled.span`
  margin-right: 15px;
`

const Date = styled.div`
  margin-top: 70px;
`

const Image = styled.div`
  width: 0 auto;
  height: 0 auto;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`

const Text = styled.div`
  line-height: 35px;
`

const TagBox = styled.div`
  display: flex;
`

const DevTag = styled.div`
  width: 0 auto;
  height: 30px;
  background: #f4f2f2;
  color: #495057;
  text-align: center;
  padding-top: 5px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 60px;
  cursor: pointer;
`

export default Post
