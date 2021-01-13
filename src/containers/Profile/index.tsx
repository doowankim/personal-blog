import React from 'react';
import * as Styled from './styles';
import { SkillTabBox } from '../../components';

const Profile = () => {
	return (
		<Styled.Container>
			<Styled.Intro>
				doowan kim <span>(frontend developer)</span>
			</Styled.Intro>
			<Styled.RowLine smallMargin />
			<Styled.IntroTab>
				<div>• Frontend 개발자 김두완입니다.</div>
				<div>• Javascript, Typescript를 주로 사용합니다.</div>
				<div>• 높은 질의 코드를 작성하기 위해 항상 노력합니다.</div>
				<div>
					• 현재 아틸런(행복골프학교)에서 React.js로 Frontend 개발을 하고
					있습니다.
				</div>
			</Styled.IntroTab>
			<Styled.RowLine smallMargin />
			<div>
				<Styled.SkillTab>사용 기술 스펙</Styled.SkillTab>
				<Styled.Skills>
					<div>
						<SkillTabBox body="Javascript" />
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="Node" />
						<SkillTabBox body="React" />
						<SkillTabBox body="Redux" />
						<SkillTabBox body="Redux-thunk" />
						<SkillTabBox body="Redux-pack" />
					</div>
					<div>
						<SkillTabBox body="Firebase" />
						<SkillTabBox body="Styled-components" />
					</div>
				</Styled.Skills>
			</div>
			<Styled.RowLine smallMargin />
			<div>
				<Styled.LinkTab>
					<div className="title">Github</div>
					<a href="https://github.com/doowankim">
						<div className="github">https://github.com/doowankim</div>
					</a>
				</Styled.LinkTab>
				<Styled.RowLine smallMargin />
				<Styled.LinkTab>
					<div className="title">Email</div>
					<a href="mailto:doowankim11@gmail.com">
						<div className="email">doowankim11@gmail.com</div>
					</a>
				</Styled.LinkTab>
			</div>
			<Styled.ExperienceTab>
				<div className="header">Work Experience</div>
				<Styled.RowLine smallMargin />
				<div className="company">아틸런 주식회사 (행복골프학교)</div>
				<Styled.RowLine smallMargin />
				<Styled.ExperienceItem>
					<div className="title">period</div>
					<div className="period">20.05 ~ current</div>
				</Styled.ExperienceItem>
				<Styled.RowLine smallMargin />
				<Styled.ExperienceItem>
					<div className="title">position</div>
					<div className="position">Front-end Developer</div>
				</Styled.ExperienceItem>
				<Styled.RowLine smallMargin />
				<Styled.ExperienceItem>
					<div className="title">projects</div>
					<div className="projects">스크린골프 연습장 admin 개발</div>
				</Styled.ExperienceItem>
			</Styled.ExperienceTab>
			<Styled.RowLine smallMargin />
			<div>
				<Styled.Experience>
					<div className="projectName">Plate Controller</div>
					<div>
						<div>∙ 골프스크린 프로젝터, 컴퓨터, 타석사용 제어 개발</div>
						<div>∙ 20.06 ~ 20.07</div>
						<div>∙ 하드웨어 연동 실시간 작업</div>
						<div>∙ 메모리 누수 개선</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">Lesson Report</div>
					<div>
						<div>∙ 회원 / 코치 레슨일지 개발</div>
						<div>∙ 20.05 ~ 20.08</div>
						<div>∙ 회원 후기 작성 기능 개발</div>
						<div>∙ 코치 영상 업로드 기능 개발</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">Check In</div>
					<div>
						<div>∙ 회원 체크인 개발 / 운영 개선</div>
						<div>∙ 20.08 ~ 20.09</div>
						<div>∙ 태블릿에 맞춰 반응형 적용</div>
						<div>∙ 레슨 및 타석 이용에 대한 체크인 기능 별도 적용</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">Dashboard</div>
					<div>
						<div>∙ 관리자 대시보드 페이지 개발 / 운영 개선</div>
						<div>∙ 20.09 ~ 20.10</div>
						<div>
							∙ 하루동안의 타석, 레슨 예약에 대한 내용을 rechart를 이용해 그래프
							UI로 개발
						</div>
						<div>∙ FCM을 이용한 웹 푸시 notification 적용</div>
						<div>
							∙ 날짜를 선택하여 해당 날짜 미확인 체크인 회원 처리 기능 개발
						</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
						<SkillTabBox body="Firebase" />
						<SkillTabBox body="rechart.js" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">User Management</div>
					<div>
						<div>∙ 회원 관리 운영 개선</div>
						<div>∙ 20.10 ~ 20.11</div>
						<div>∙ 회원 검색 기능 개발</div>
						<div>∙ 회원 리스트 그리드 화면 추가 적용</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">CSS transform</div>
					<div>
						<div>∙ 기존 SCSS에서 CSS in js인 styled-component로 전환</div>
						<div>∙ 20.09 ~ 20.11</div>
						<div>∙ 컴포넌트 별로</div>
						<div>∙ 회원 리스트 그리드 화면 추가 적용</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
						<SkillTabBox body="Styled-components" />
					</div>
				</Styled.Experience>
				<Styled.Experience>
					<div className="projectName">Reservation Improving</div>
					<div>
						<div>∙ 스크린 예약 기능 개선</div>
						<div>∙ 20.12 ~ 21.01</div>
						<div>∙ 예약자 검색기능 개선</div>
					</div>
					<div className="skill" style={{ display: 'flex' }}>
						<SkillTabBox body="Typescript" />
						<SkillTabBox body="React" />
					</div>
				</Styled.Experience>
			</div>
		</Styled.Container>
	);
};

export default Profile;
