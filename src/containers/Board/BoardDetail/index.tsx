import React, { useState } from 'react';
import * as Styled from './styles';

const BoardDetail = () => {
	const [comment, setComment] = useState<any>({
		name: '',
		comment: '',
	});

	const handleCommentChange = (e: any) => {
		setComment({ ...comment, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		if (comment) {
			window.location.reload(true);
		}
	};

	return (
		<Styled.Container>
			<Styled.TitleWrapper>
				<div>{data.title}</div>
			</Styled.TitleWrapper>
			<Styled.RowLine />
			<Styled.DescriptionWrapper>
				<div>{data.description}</div>
				<Styled.BottomBox>
					<Styled.WriterBox>
						<div className="avatar" />
						<div className="userBox">
							<div className="name">작성자 : 김두완</div>
							<div className="date">작성일 : 2020-01-08 12:52</div>
						</div>
					</Styled.WriterBox>
					<Styled.TagBox>
						<div>Tag</div>
						<div>Tag</div>
					</Styled.TagBox>
				</Styled.BottomBox>
				<form onSubmit={handleSubmit}>
					<Styled.CommentBox>
						<Styled.CommentCount>0 Comment</Styled.CommentCount>
						<Styled.CommentDetailBox>
							<Styled.CommentUserName>
								<input
									name="name"
									value={comment?.name}
									placeholder="이름을 작성해주세요"
									onChange={handleCommentChange}
								/>
							</Styled.CommentUserName>
							<Styled.CommentText>
								<textarea
									name="comment"
									value={comment?.comment}
									placeholder="소중한 댓글을 작성해주세요"
									onChange={handleCommentChange}
								/>
								<Styled.CommentButton type="submit">
									Add Comment
								</Styled.CommentButton>
							</Styled.CommentText>
						</Styled.CommentDetailBox>
					</Styled.CommentBox>
				</form>
			</Styled.DescriptionWrapper>
		</Styled.Container>
	);
};

const data = {
	title: 'Javascript new Date() 이용하여 날짜 계산하기',
	description:
		'let date = new Date();' +
		'let Year = date.getFullYear(); //년 4자리를 현지 시각 또는 국제 표준시로 변환' +
		'let Month = date.getMonth(); //월 현지 시각 또는 국제 표준시로 변환' +
		'let Day = date.getDay(); //일 현지 시각 또는 국제 표준시로 변환' +
		'let Time = date.getTime(); //시간 현지 시각 또는 국제 표준시로 변환' +
		'console.log(date);' +
		'console.log(Year);' +
		'console.log(Month);' +
		'console.log(Day);' +
		'console.log(Time);',
};

export default BoardDetail;
