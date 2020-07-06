import React from "react"
import styled from "styled-components"

const Board = () => {
  return (
    <Container>
      <Wrapper>
        <div>Board Page</div>
        <WriteTitle>
          <Title name="title" />
        </WriteTitle>
        <WriteText>
          <Text name="text" />
        </WriteText>
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
