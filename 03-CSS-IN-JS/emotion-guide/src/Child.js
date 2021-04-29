import React from 'react'
import styled from '@emotion/styled'

const Child = styled.div`
  color: red;
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

function App() {
  return (
    <div>
      <Child>child</Child>
      <Parent><Child>被Parent包裹的Child</Child></Parent>
    </div>
  )
}
export default App