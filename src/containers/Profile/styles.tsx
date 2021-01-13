import styled, { css } from 'styled-components';
import * as color from '../../components/color/index';

interface rowProps {
	top?: boolean;
	smallMargin?: boolean;
}

export const Container = styled.div`
	width: 100%;
	height: max-content;
	margin-top: 50px;
`;

export const Intro = styled.div`
	font-size: 2.4em;
	font-weight: 800;
	text-transform: uppercase;

	span {
		font-size: 0.8em;
	}
`;

export const RowLine = styled.div<rowProps>`
	width: 100%;
	height: 1px;
	background: ${color.Colors.line};
	margin: 20px 0 40px 0;

	${props => {
		if (props.smallMargin)
			return css`
				margin: 10px 0;
			`;
		if (props.top)
			return css`
				margin: 40px 0;
			`;
	}}
`;

export const IntroTab = styled.div`
	font-size: 1.8em;
	font-weight: regular;
	line-height: 30px;
`;

export const SkillTab = styled.div`
	font-size: 2em;
	font-weight: bold;
`;

export const Skills = styled.div`
	width: 100%;

	div {
		display: flex;
	}
`;

export const LinkTab = styled.div`
	display: flex;
	font-size: 1.6em;

	.title {
		font-weight: bold;
	}
	.github {
		margin-left: 80px;
	}
	.email {
		margin-left: 90px;
	}
`;

export const ExperienceTab = styled.div`
	font-size: 1.4em;
	margin-top: 100px;

	.header {
		font-family: 'Source Code Pro', monospace;
		font-size: 2.4em;
		font-weight: bold;
	}
	.company {
		font-size: 1.4em;
		font-weight: bold;
		color: ${color.Colors.blue};
		margin-top: 50px;
	}
`;

export const ExperienceItem = styled.div`
	display: flex;
	font-size: 1.2em;

	.title {
		font-weight: bold;
	}

	.period {
		margin-left: 80px;
	}
	.position {
		margin-left: 68px;
	}
	.projects {
		margin-left: 68px;
	}
`;

export const Experience = styled.div`
	font-size: 1.4em;
	line-height: 20px;
	margin-bottom: 20px;

	.projectName {
		font-size: 1.2em;
		font-weight: bold;
		margin-bottom: 10px;
	}

	.skill {
		font-size: 0.7em;
	}
`;
