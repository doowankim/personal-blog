import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface tagProps {
	all?: boolean;
}

export const Wrapper = styled.div`
	width: 100%;
	margin-top: 50px;
`;

export const WriteText = styled.div`
	float: right;
	font-size: 14px;
	color: #495057;
	cursor: pointer;
	margin-bottom: 20px;
`;

export const TagBox = styled.div`
	display: flex;
	width: 100%;
	height: 86px;
	background: #f2f2f2;
	border: 1px solid #f2f2f2;
	border-radius: 5px;
	align-items: center;
	padding: 0 20px;
	margin-bottom: 40px;
	overflow: auto;
`;

export const Tag = styled.div<tagProps>`
	padding: 8px 18px;
	border: 1px solid #ddd;
	border-radius: 15px;
	margin-left: 10px;
	cursor: pointer;
	transition: 0.2s;

	&:first-child {
		margin-left: 0;
	}

	&:hover {
		background: ${darken(0.1, '#f2f2f2')};
		transition: 0.2s;
	}

	${props => {
		if (props.all)
			return css`
				border: 2px solid #909da0;
			`;
	}}
`;
