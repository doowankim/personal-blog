import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const Home = () => {
	return (
		<Container>
			<Wrapper>
				<TextContainer>
					<Text>프론트엔드 개발자 Kei 블로그</Text>
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
						<IconWrapper href="https://github.com/doowankim">
							<Icon className="fab fa-github" />
						</IconWrapper>
						<IconWrapper href="https://www.instagram.com/dw_kevin0/">
							<Icon className="fab fa-instagram" />
						</IconWrapper>
						<IconWrapper href="https://www.facebook.com/doowan.kim.3">
							<Icon className="fab fa-facebook-square" />
						</IconWrapper>
						<IconWrapper href="https://velog.io/@kimdw1991">
							<Icon className="fas fa-link" />
						</IconWrapper>
					</IconStyle>
					<EmailText>
						<i className="far fa-envelope" style={{ marginRight: '10px' }} />{' '}
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

const Icon = styled.i`
	margin-right: 20px;
	cursor: pointer;
`;

const IconWrapper = styled.a`
	text-decoration: none;
	&:hover {
		text-decoration: none;
		color: #fff;
	}
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
	transition: 0.35s;

	&:hover {
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.16);
		transition: 0.35s;
		background-color: ${darken(0.2, '#bfb9b9')};
		color: #f9f9f9;
		outline: 0;
	}

	&:focus {
		outline: 0;
	}
`;

export default Home;
