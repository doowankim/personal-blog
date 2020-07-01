import React from "react"
import Moment from "react-moment"
import styled from "styled-components"
import Header from "../Header"

const Main = () => {
  const postData = [
    {
      id: 1,
      imageURL: "/images/wwdc.jpeg",
      title: "애플 2020 WWDC 발표하다!",
      text:
        "첫 번째, iOS14" +
        "홈 화면" +
        "너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다." +
        "검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-02T07:54:30.000Z",
    },
    {
      id: 2,
      imageURL: "/images/wwdc.jpeg",
      title: "구속은 아니지만, 처벌은 [____]?",
      text:
        "서울역 한복판에서 한 남성이 생판 모르는 여성을 폭행한 사건. 피해자는 광대뼈가 부러져 수술을 받았는데요. 경찰이 해당 남성을 찾아내 구속영장을 신청했지만, 법원이 구속영장을 2번이나 기각해서 사람들이 분노하고 있어요." +
        "누군가 죄를 지으면, 경찰이 체포해서 데려가잖아요. 이처럼 죄를 지었다고 의심되는 사람을 붙잡아 신체의 자유를 빼앗는 걸 ‘구속’이라고 해요. 그런데 경찰이 아무나, 아무 때나 체포할 수는 없어요. 구속되면 가족도 보기 어렵고, 변호사 구하기도 어려워지니까요. 그래서 보호장치로 둔 것: 법원의 허락 ⚖️. 경찰·검찰은 법원이 허락했다는 걸 증명하는 서류(a.k.a. 영장*)가 있어야만 해요. ‘구속영장’은 그중에서도 피의자**를 붙잡아두는 걸 법원이 OK했다는 거죠.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-01T07:54:30.000Z",
    },
    {
      id: 3,
      imageURL: "/images/wwdc.jpeg",
      title: "부글부글 남중국해",
      text:
        "남중국해 종종 들어봤는데, 뭐더라?" +
        "말 그대로 중국의 남쪽 바다인데요(South China Sea, 그래픽)." +
        "일본은 옛날 20년간 이 바다의 주인이었어요. 그런데 2차 세계대전에서 패배하며 물러났고, 바로 주변 6개 나라가 ‘여기의 다음 주인은 나야!’ 하며 나섰어요. 이곳이 완전 금싸라기 바다거든요." +
        "바다의 핫플레이스: 전 세계에서 바다로 오고가는 물건의 절반 이상이 여기로 오고가요." +
        "남중국해를 누가 차지하냐에 따라, ‘전 세계 바다 골목대장’이 누구인지 정해지는 거라고. 또 우리나라와는 더 긴밀해요. 우리나라로 오는 원유 대부분이 이곳을 통해서 와서, 한국의 에너지 수입의 핵심 통로 역할을 하거든요.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-04-29T07:54:30.000Z",
    },
    {
      id: 4,
      imageURL: "/images/wwdc.jpeg",
      title: "지구가 슬퍼하는 소식",
      text:
        "지구온난화와 댕댕이: 댕댕이 좋아하는 뉴니커, 모두 주목! 요 며칠 정말 더웠죠. 어쩌면 강아지도 많이 힘들었을지 몰라요. 강아지도 사람이 열병에 걸리는 것처럼 열에 취약하다는 연구 결과가 있었습니다. 다음과 같은 경우, 뜨거워지는 지구에 더 힘들어 할 거라고:" +
        "✔️ 몸무게가 50킬로그램이 넘는 경우" +
        "✔️ 나이가 12살보다 많은 경우" +
        "✔️ 평평한 얼굴이나 넓은 두개골을 가진 경우(예: 불독, 스패니얼 등)" +
        "✔️ 같은 품종으로 교배한 경우 " +
        "또 의외로, ‘털이 복슬거린다=열에 쉽게 지친다’는 아니였어요. 털이 길고 두꺼운 골든리트리버보다 털이 짧은 그레이하운드가 열에 더 약하다는 연구 결과가 나왔다고. 열에 가장 약한 강아지 1등은 차우차우고요 😢. 사람도, 강아지도, 자연도 모두 힘들어지지 않도록 지구온난화 속도를 줄이는데 더욱 신경써야 할 것 같아요.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-14T07:54:30.000Z",
    },
    {
      id: 5,
      imageURL: "/images/wwdc.jpeg",
      title: "지구가 슬퍼하는 소식",
      text:
        "지구온난화와 댕댕이: 댕댕이 좋아하는 뉴니커, 모두 주목! 요 며칠 정말 더웠죠. 어쩌면 강아지도 많이 힘들었을지 몰라요. 강아지도 사람이 열병에 걸리는 것처럼 열에 취약하다는 연구 결과가 있었습니다. 다음과 같은 경우, 뜨거워지는 지구에 더 힘들어 할 거라고:" +
        "✔️ 몸무게가 50킬로그램이 넘는 경우" +
        "✔️ 나이가 12살보다 많은 경우" +
        "✔️ 평평한 얼굴이나 넓은 두개골을 가진 경우(예: 불독, 스패니얼 등)" +
        "✔️ 같은 품종으로 교배한 경우 " +
        "또 의외로, ‘털이 복슬거린다=열에 쉽게 지친다’는 아니였어요. 털이 길고 두꺼운 골든리트리버보다 털이 짧은 그레이하운드가 열에 더 약하다는 연구 결과가 나왔다고. 열에 가장 약한 강아지 1등은 차우차우고요 😢. 사람도, 강아지도, 자연도 모두 힘들어지지 않도록 지구온난화 속도를 줄이는데 더욱 신경써야 할 것 같아요.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-14T07:54:30.000Z",
    },
    {
      id: 6,
      imageURL: "/images/wwdc.jpeg",
      title: "지구가 슬퍼하는 소식",
      text:
        "지구온난화와 댕댕이: 댕댕이 좋아하는 뉴니커, 모두 주목! 요 며칠 정말 더웠죠. 어쩌면 강아지도 많이 힘들었을지 몰라요. 강아지도 사람이 열병에 걸리는 것처럼 열에 취약하다는 연구 결과가 있었습니다. 다음과 같은 경우, 뜨거워지는 지구에 더 힘들어 할 거라고:" +
        "✔️ 몸무게가 50킬로그램이 넘는 경우" +
        "✔️ 나이가 12살보다 많은 경우" +
        "✔️ 평평한 얼굴이나 넓은 두개골을 가진 경우(예: 불독, 스패니얼 등)" +
        "✔️ 같은 품종으로 교배한 경우 " +
        "또 의외로, ‘털이 복슬거린다=열에 쉽게 지친다’는 아니였어요. 털이 길고 두꺼운 골든리트리버보다 털이 짧은 그레이하운드가 열에 더 약하다는 연구 결과가 나왔다고. 열에 가장 약한 강아지 1등은 차우차우고요 😢. 사람도, 강아지도, 자연도 모두 힘들어지지 않도록 지구온난화 속도를 줄이는데 더욱 신경써야 할 것 같아요.",
      editor: "김두완",
      nickname: "kei",
      date: "2020-06-14T07:54:30.000Z",
    },
  ]

  return (
    <Container>
      <Header />
      <Box>
        <PanelBox>
          {postData.map((detailData: any, index: number) => (
            <React.Fragment key={index}>
              <Panel>
                <PanelDescriptionBox>
                  <PanelTitle>{detailData.title}</PanelTitle>
                  <PanelText>{detailData.text.substring(0, 180)}...</PanelText>
                  <PanelDate>
                    <PanelNickname>
                      <span>작성일 </span>
                      <span> ・ </span>
                      <Moment
                        format="YYYY/MM/DD HH:mm"
                        style={{ paddingLeft: "5px", paddingRight: "20px" }}
                      >
                        {detailData.date}
                      </Moment>
                      <span> ・ </span>
                      <span> by {detailData.nickname}</span>
                    </PanelNickname>
                  </PanelDate>
                </PanelDescriptionBox>
                <PanelImageBox>
                  <PanelImage src="/images/wwdc.jpeg" alt="wwdc2020" />
                </PanelImageBox>
              </Panel>
            </React.Fragment>
          ))}
        </PanelBox>
      </Box>
    </Container>
  )
}

const Container = styled.div``

const Box = styled.div`
  position: relative;
  width: 100%;
  height: 90vh auto;
  background: #f2eded;
`

const PanelBox = styled.div`
  position: relative;
  display: block;
  padding-top: 30px;
  width: 950px;
  left: 50%;
  transform: translateX(-48%);
  height: 90vh auto;
  box-sizing: border-box;
`

const Panel = styled.button`
  width: 900px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.35s;
  color: #495057;
  background: white;
  display: inline-block;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
    transition: 0.35s;
  }
`

const PanelImageBox = styled.div`
  width: 220px;
  float: right;
`

const PanelImage = styled.img`
  width: 200px;
  height: 150px;
`

const PanelDescriptionBox = styled.div`
  float: left;
  width: 600px;
`

const PanelTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #514e4e;
  padding-bottom: 20px;
`

const PanelText = styled.div`
  font-size: 15px;

  color: #adadad;
  padding-bottom: 20px;
`

const PanelNickname = styled.div``

const PanelDate = styled.div`
  display: block;
  overflow: hidden;
  padding-top: 20px;
  font-size: 13px;
  color: #959595;
`

export default Main
