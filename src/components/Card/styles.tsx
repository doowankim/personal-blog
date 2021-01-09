import styled from 'styled-components';

export const Card = styled.div`
	height: 164px;
	border: 1px solid #ddd;
	border-radius: 5px;
	margin-bottom: 35px;
	cursor: pointer;
	transition: 0.35s;
	box-shadow: 2px 2px 10px gray;

	&:hover {
		box-shadow: 5px 5px 20px gray;
		transition: 0.35s;
	}
`;

export const CardWrapper = styled.div`
	padding: 23px 32px 38px 33px;
	color: #495057;
`;

export const CardTitle = styled.div`
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 14px;
`;

export const CardDescription = styled.div`
	display: -webkit-box;
	width: 100%;
	height: 58px;
	line-height: 20px;
	font-size: 14px;
	white-space: normal;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: left;
	word-wrap: break-word;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
`;
