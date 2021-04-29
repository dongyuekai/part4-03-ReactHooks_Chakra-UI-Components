import React from 'react'
import styled from '@emotion/styled'

const Child = styled.div`
  color: red;
  &:hover {
    background:red
  }
`
// const Parent = styled.div`
//   ${Child}{
//     color: green
//   }
// `
const Parent = styled.div({
  [Child]: {
    color: 'green'
  }
})

const Button = styled.button`
  color: red;
`

function App() {
  return (
    <div>
      <Child>child</Child>
      <Parent><Child>被Parent包裹的Child</Child></Parent>
      <Button as='a' href='#'>按钮</Button>
    </div>
  )
}
export default App