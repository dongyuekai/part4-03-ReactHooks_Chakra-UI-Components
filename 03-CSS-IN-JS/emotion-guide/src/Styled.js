// 样式化组件
import React from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  width: 100px;
  height:30px;
  background: ${props => props.bgColor || 'red'};
`
const Container = styled.div(props => ({
  width: props.w || 200,
  background: 'pink',
}))

const Button2 = styled.button({
  width: 200,
  background: 'green'
}, props => ({
  width: props.w,
  background: props.bgColor
}))

function Styled() {
  return (
    <Container w={500}>
      {/* <Button bgColor='blue'>我是按钮</Button><br/> */}
      <Button2 w={500} bgColor='gray'>哈哈</Button2>
    </Container>
  )
}
export default Styled
