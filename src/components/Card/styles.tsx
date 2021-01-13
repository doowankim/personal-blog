import styled from 'styled-components';
import * as color from '../color/index';

export const BoardItem = styled.div`
	width: 100%;
	border-bottom: 1px solid ${color.Colors.line};
`;

export const Wrapper = styled.div`
	padding: 14px 18px;
`;

export const Title = styled.div`
	font-size: 1.8em;
	font-weight: bold;
	color: ${color.Colors.primary};
	margin-bottom: 1.2em;
	cursor: pointer;

	&:hover {
		color: ${color.Colors.blue};
	}
`;

export const Description = styled.div`
	display: -webkit-box;
	width: 100%;
	height: 80px;
	line-height: 20px;
	font-size: 12px;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
	word-wrap: break-word;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	margin-bottom: 1.6em;
`;

export const Tag = styled.div`
	font-size: 1.2em;
	color: ${color.Colors.blue};
`;
