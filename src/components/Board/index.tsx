import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Board = () => {
  const [title, isTitle] = useState<string>("")
  const [text, isText] = useState<string>("")
  const [data, setData] = useState<object>({})

  const onTitleChange = (e: any) => {
    isTitle(e.target.value)
  }

  const onTextChange = (e: any) => {
    isText(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()

    const postData = {
      title: title,
      text: text,
    }
    setData(postData)
  }

  useEffect(() => {}, [title, text])
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
          <Button type="submit">등록하기</Button>
        </form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
  margin-top: 100px;
`

const Wrapper = styled.div`
  backface-visibility: hidden;
`

const WriteTitle = styled.div``

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
`

const WriteText = styled.div``

const Text = styled.textarea`
  min-height: 335px;
  min-width: 950px;
  border: none;
  margin-bottom: 50px;
  font-size: 24px;
  outline: 0;
  overflow: auto;
  &::placeholder {
    font-size: 24px;
    font-weight: 300;
    height: 40px;
  }
`

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
`

export default Board
