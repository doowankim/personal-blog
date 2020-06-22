import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <TextContainer>
          <Text>
            프론트엔드 개발자 <strong>Kei</strong> 블로그
          </Text>
          <br />
          <br />
          <div>
            <Image src="/images/profile_image.jpeg" alt="profileImage" />
          </div>
          <DetailText>
            프론트엔드 개발자 Kei의 이야기가 궁금하시다면?
          </DetailText>
          <a href="/main">
            <Button>블로그 들어가기</Button>
          </a>
          <IconStyle>
            <i className="fab fa-github" style={{marginRight: '20px'}} />
            <i className="fab fa-instagram" style={{marginRight: '20px'}} />
            <i
              className="fab fa-facebook-square"
              style={{marginRight: '20px'}}
            />
            <i className="fas fa-link" />
          </IconStyle>
          <EmailText>
            <i className="far fa-envelope" style={{marginRight: '10px'}} />{' '}
            kimdw1991@gmail.com
          </EmailText>
          <br />
          <br />

          <br />
          <br />

          {/* <div style={{color: 'white'}}>© 2020 by Kei. </div> */}
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(90deg, #495057 60%, #fff 40%);
`;

const Wrapper = styled.div`
  margin-left: 100px;
`;

const TextContainer = styled.div`
  padding-top: 150px;
`;

const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const DetailText = styled.div`
  font-size: 15px;
  color: white;
  margin-bottom: 30px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 30%;
  margin-bottom: 50px;
`;

const IconStyle = styled.div`
  margin-left: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #fff;
`;

const EmailText = styled.div`
  margin-left: 5px;
  font-size: 18px;
  color: #fff;
`;

const Button = styled.button`
  font-size: 18px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  color: #495057;
  border-radius: 5px;

  outline: 0;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
    transition: 0.35s;
    background-color: #edf1f6;
    color: black;
    outline: 0;
  }

  &:focus {
    outline: 0;
  }
`;

export default Home;
