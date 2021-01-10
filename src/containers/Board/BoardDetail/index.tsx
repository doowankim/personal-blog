import React, { useState } from 'react';
import * as Styled from './styles';
import { useLocation } from 'react-router-dom';

const BoardDetail = () => {
	const location = useLocation();

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
				<div>Title</div>
			</Styled.TitleWrapper>
			<Styled.RowLine />
			<Styled.DescriptionWrapper>
				<div>Description</div>
				<Styled.BottomBox>
					<Styled.WriterBox>
						<div className="avatar" />
						<div className="userBox">
							<div className="name">작성자 : 김두완</div>
							<div className="date">작성일 : 2020-01-08 12:52 PM</div>
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
								<input
									name="comment"
									value={comment?.comment}
									placeholder="덧글을 작성해주세요"
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

export default BoardDetail;
