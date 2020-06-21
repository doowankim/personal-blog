import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <TextContainer>
        <Text>프론트엔드 개발자 Kei의 블로그</Text>
        <br />
        <br />
        <div style={{color: 'white', fontSize: '18px'}}>
          <img
            src="/images/profile_image.jpeg"
            alt="profileImage"
            style={{height: '100px', width: '100px', borderRadius: '30%'}}
          />
        </div>
        <div
          style={{
            color: 'white',
            fontSize: '18px',
            marginLeft: '15px',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          <i className="fab fa-instagram" style={{marginRight: '10px'}} />
          <i className="fab fa-facebook-square" style={{marginRight: '10px'}} />
          <i className="fas fa-link" />
        </div>
        <div style={{color: 'white', fontSize: '18px', marginLeft: '15px'}}>
          <i className="far fa-envelope" /> kimdw1991@gmail.com
        </div>
        <br />
        <br />
        <Button>블로그 들어가기</Button>
        <br />
        <br />

        {/* <div style={{color: 'white'}}>© 2020 by Kei. </div> */}
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: #292929;
  margin-left: 50px;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 30%;
  bottom: 70%;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Button = styled.button`
  font-size: 20px;
  padding-left: 5px;
  padding-right: 3px;
  padding-top: 5px;
  padding-bottom: 5px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  color: #495057;
  border-radius: 5px;

  outline: 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
    transition: 0.35s;
    background-color: #495057;
    color: white;
  }
`;

export default Home;
