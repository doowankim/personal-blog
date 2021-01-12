import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
	width: 100%;
	border: 1px solid #ddd;
	margin-top: 85px;
`;

export const TitleWrapper = styled.div`
	padding: 33px 40px;
	color: #495057;
	font-size: 24px;
	font-weight: bold;
`;

export const RowLine = styled.div`
	width: 90%;
	height: 1px;
	background: #ddd;
	margin: 0 auto;
`;

export const DescriptionWrapper = styled.div`
	padding: 52px 40px;
`;

export const BottomBox = styled.div`
	margin-top: 200px;
`;

export const WriterBox = styled.div`
	display: flex;
	align-items: center;

	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: #ddd;
	}

	.userBox {
		margin-left: 50px;

		.name {
			font-size: 18px;
		}
		.date {
			font-size: 12px;
			color: #495057;
			margin-top: 10px;
		}
	}
`;

export const TagBox = styled.div`
	display: flex;
	margin-top: 35px;

	div {
		padding: 8px 15px;
		border-radius: 15px;
		background: #fcf2f8;
		color: #d374a6;
		margin-left: 10px;

		&:first-child {
			margin-left: 0;
		}
	}
`;

export const CommentBox = styled.div`
	margin-top: 70px;
`;

export const CommentCount = styled.div`
	margin: 0 0 10px 20px;
	color: #495057;
	font-weight: bold;
`;

export const CommentDetailBox = styled.div``;

export const CommentUserName = styled.div`
	padding: 7px;

	input {
		height: 30px;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding-left: 15px;

		&:focus {
			outline: none;
		}
	}
`;

export const CommentText = styled.div`
	padding: 7px;

	input {
		width: 100%;
		height: 80px;
		border: 1px solid #ddd;
		border-radius: 5px;
		padding-left: 15px;

		&:focus {
			outline: none;
		}
	}
`;

export const CommentButton = styled.button`
	float: right;
	height: 35px;
	background: #ba5793;
	color: #fff;
	border: 1px solid #ba5793;
	border-radius: 5px;
	padding: 0 10px;
	margin-top: 15px;
	cursor: pointer;
	transition: 0.35s;

	&:focus {
		outline: none;
	}

	&:hover {
		background: ${darken(0.1, '#ba5793')};
		transition: 0.35s;
	}
`;
