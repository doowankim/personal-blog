import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Board = () => {
	const [title, isTitle] = useState<string>('');
	const [text, isText] = useState<string>('');
	const [data, setData] = useState<object>({});
	const [image, setImage] = useState({ preview: '', raw: '' });

	const handleImageChange = (e: any) => {
		if (e.target.files.length) {
			setImage({
				preview: URL.createObjectURL(e.target.files[0]),
				raw: e.target.files[0],
			});
		}
	};

	const onTitleChange = (e: any) => {
		isTitle(e.target.value);
	};

	const onTextChange = (e: any) => {
		isText(e.target.value);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const postData = {
			title: title,
			text: text,
		};

		const formData = new FormData();
		formData.append('image', image.raw);

		await fetch('YOUR_URL', {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data',
			},
			body: formData,
		});

		setData(postData);
	};
	console.log(data);

	useEffect(() => {}, [title, text]);
	return (
		<Container>
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<WriteTitle>
						<Title
							name="title"
							placeholder="제목을 입력해주세요"
							onChange={onTitleChange}
							value={title}
						/>
					</WriteTitle>
					<WriteText>
						<Text
							name="text"
							placeholder="내용을 입력해주세요"
							onChange={onTextChange}
							value={text}
						/>
					</WriteText>
					{/* 이미지 업로드가 들어갑니다. */}
					<label htmlFor="upload-button">
						{image.preview ? (
							<>
								<span className="fa-stack fa-2x mt-3 mb-2">
									<i
										className="far fa-image"
										style={{
											fontSize: '25px',
											marginLeft: '20px',
											cursor: 'pointer',
										}}
									></i>
								</span>
								<span>
									<img
										src={image.preview}
										alt="dummy"
										width="150"
										height="130"
									/>
								</span>
							</>
						) : (
							<>
								<span className="fa-stack fa-2x mt-3 mb-2">
									<i
										className="far fa-image"
										style={{
											fontSize: '25px',
											marginLeft: '20px',
											cursor: 'pointer',
										}}
									></i>
								</span>
							</>
						)}
					</label>
					<input
						type="file"
						id="upload-button"
						style={{ display: 'none' }}
						onChange={handleImageChange}
					/>
					<br />
					<Button type="submit">등록하기</Button>
				</form>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	position: relative;
	display: block;
	margin-top: 80px;
	width: 1000px;
	height: 800px;
	border: none;
	padding: 20px 20px 20px 20px;
	left: 50%;
	transform: translateX(-50%);
`;

const Wrapper = styled.div`
	backface-visibility: hidden;
`;

const WriteTitle = styled.div``;

const Title = styled.input`
	height: 50px;
	min-width: 950px;
	border: none;
	border-bottom: 1px solid #eee;
	font-size: 38px;
	outline: 0;
	margin-bottom: 50px;
	&::placeholder {
		font-size: 38px;
		font-weight: 300;
		height: 40px;
	}
`;

const WriteText = styled.div``;

const Text = styled.textarea`
	min-height: 505px;
	min-width: 950px;
	border: 1px solid #ddd;
	font-size: 24px;
	outline: 0;
	overflow: auto;
	&::placeholder {
		font-size: 24px;
		font-weight: 300;
		height: 40px;
	}
`;

const Button = styled.button`
	width: 120px;
	height: 40px;
	font-size: 16px;
	border-radius: 5px;
	background: white;
	border: 1px solid #ddd;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.04);
	transition: 0.25s;
	&:hover {
		background: #f2f2f2;
		transition: 0.35s;
	}
	&:focus {
		outline: none;
	}
`;

export default Board;
