import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
    <Container>
      <HeaderBox>
        {/* Icon 안에는 Dropdown 메뉴가 들어갑니다. */}
        <Icon className="fas fa-bars" />
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
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
          <Panel>
            <div>게시글 썸네일이 들어갑니다.</div>
            <div>게시글 내용이 들어갑니다.</div>
            <div>작성자 닉네임이 들어갑니다.</div>
            <div>작성 날짜가 들어갑니다.</div>
          </Panel>
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
  padding: 18px 0 18px 20px;
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

export default Main;
