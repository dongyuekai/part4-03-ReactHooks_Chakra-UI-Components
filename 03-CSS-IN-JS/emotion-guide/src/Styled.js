// 样式化组件
import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  width: 100px;
  height:30px;
  background: blue;
`
const Container = styled.div({
  width: 100,
  background: 'pink'
})
function Styled() {
  return (
    <Container>
      <Button>我是按钮</Button>
    </Container>
  )
}
export default Styled
