import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';

const Main = () => {
  const postData = [
    {
      id: 1,
      title: '애플 2020 WWDC 발표하다!',
      text:
        '첫 번째, iOS14' +
        '홈 화면' +
        '너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다.' +
        '검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.',
      editor: '김두완',
      nickname: 'kei',
      date: '2020-06-02T07:54:30.000Z',
    },
    {
      id: 2,
      title: '애플 2020 WWDC 발표하다!',
      text:
        '첫 번째, iOS14' +
        '홈 화면' +
        '너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다.' +
        '검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.',
      editor: '김두완',
      nickname: 'kei',
      date: '2020-06-01T07:54:30.000Z',
    },
    {
      id: 3,
      title: '애플 2020 WWDC 발표하다!',
      text:
        '첫 번째, iOS14' +
        '홈 화면' +
        '너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다.' +
        '검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.',
      editor: '김두완',
      nickname: 'kei',
      date: '2020-04-29T07:54:30.000Z',
    },
    {
      id: 4,
      title: '애플 2020 WWDC 발표하다!',
      text:
        '첫 번째, iOS14' +
        '홈 화면' +
        '너무 앱이 많아서 페이지를 정리하기 어려울 때 자동으로 정리해주는 앱 라이브러리 기능을 선보인다. 맥OS의 스택과 비슷한 기능이다. 앱 라이브러리는 홈 화면을 지정하는 것으로, 볼 것과 숨길 것을 고를 수 있다. 앱 라이브러리에서 한번 탭으로 바로 앱을 실행할 수 있다.' +
        '검색에서 쉽게 앱을 찾을 수 있으며 사용할만한 앱을 AI로 자동으로 추천한다.',
      editor: '김두완',
      nickname: 'kei',
      date: '2020-06-14T07:54:30.000Z',
    },
  ];

  return (
    <Container>
      <HeaderBox>
        {/* Icon 안에는 Dropdown 메뉴가 들어갑니다. */}
        <DropdownContainer>
          <DropdownList>
            <Icon className="fas fa-bars" />
          </DropdownList>
        </DropdownContainer>
        <Text>
          <img
            src="/images/brunch_logo.png"
            alt="brunchLogo"
            style={{width: '250px', height: '70px'}}
          />
        </Text>
      </HeaderBox>
      <Box>
        <PanelBox>
          {postData.map((detailData: any, index: number) => (
            <React.Fragment key={index}>
              <Panel>
                <PanelTitle>{detailData.title}</PanelTitle>
                <PanelText>{detailData.text}</PanelText>
                <PanelDate>
                  <PanelNickname>
                    작성일 ・
                    <Moment
                      format="YYYY/MM/DD HH:mm"
                      style={{paddingLeft: '10px', paddingRight: '10px'}}
                    >
                      {detailData.date}
                    </Moment>
                    ・ by {detailData.nickname}
                  </PanelNickname>
                </PanelDate>
              </Panel>
            </React.Fragment>
          ))}
        </PanelBox>
      </Box>
    </Container>
  );
};

const Container = styled.div``;

const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid #ddd;
  background-color: #ffffff;
`;

const DropdownContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const DropdownList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
  padding: 0.5em 0;
  list-style: none;
`;

const Icon = styled.i`
  position: absolute;
  top: 17%;
  left: 7%;
  margin-top: -100px;
  margin-left: -70px;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 18px;
  position: absolute;
  top: 17%;
  left: 51%;
  margin-top: -128px;
  margin-left: -130px;
  cursor: pointer;
`;

const Box = styled.div``;

const PanelBox = styled.div`
  position: absolute;
  top: 17%;
  left: 7%;
  margin-left: -100px;
  width: 100%;
  height: 100%;
  position: relative;
  margin-right: 8px;
  padding: 16px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #fcf9f9;
  box-sizing: border-box;
`;

const Panel = styled.button`
  position: relative;
  left: 9.8%;
  width: 550px;
  flex-basis: 256px;
  flex-grow: 1;
  height: 300px;
  padding: 18px 18px 18px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  box-sizing: border-box;
  margin: 0 4px 8px;
  cursor: pointer;
  transition: 0.35s;
  color: #495057;
  background: white;
  display: inline-block;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
    transition: 0.35s;
  }
`;

const PanelTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  color: #514e4e;
  padding-bottom: 20px;
`;

const PanelText = styled.div`
  font-size: 15px;
  color: #adadad;
  padding-bottom: 20px;
`;

const PanelNickname = styled.div``;

const PanelDate = styled.div``;

export default Main;
