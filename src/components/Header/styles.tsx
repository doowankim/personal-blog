import styled from 'styled-components';
import { darken } from 'polished';

export const HeaderBox = styled.div`
	display: flex;
	width: 100%;
	height: 80px;
	border: 2px solid #ddd;
	background-color: #fff;
	padding: 0 40px;
	justify-content: space-between;
	align-items: center;
`;

export const Logo = styled.div`
	cursor: pointer;
	span {
		margin-left: 5px;
		font-size: 18px;
		font-weight: bold;
	}
`;

export const LeftMenu = styled.div`
	display: flex;

	& > div {
		width: 30px;
		height: 30px;
		background: #495057;
		color: #fff;
		text-align: center;
		line-height: 30px;
		margin-left: 10px;
		border-radius: 5px;
		transition: 0.25s;
		cursor: pointer;

		&:hover {
			background: ${darken(0.3, '#495057')};
			transition: 0.25s;
		}
	}
	& > span {
		margin: 7px 0 0 10px;
		cursor: pointer;
	}
`;
