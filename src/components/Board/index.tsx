import React, { useState } from "react"
import styled from "styled-components"

const Board = () => {
  const [data, setData] = useState({
    title: "",
    text: "",
  })

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  return (
    <Container>
      <Wrapper>
        <div>Board Page</div>
        <form onSubmit={handleSubmit}>
          <WriteTitle>
            <Title name="title" onChange={handleChange} />
          </WriteTitle>
          <WriteText>
            <Text name="text" onChange={handleChange} />
          </WriteText>
        </form>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  text-align: center;
`

const Wrapper = styled.div`
  backface-visibility: hidden;
`

const WriteTitle = styled.div``

const Title = styled.input`
  min-width: 950px;
`

const WriteText = styled.div``

const Text = styled.input`
  min-width: 950px;
`

export default Board
