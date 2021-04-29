import React from 'react'
import styled from '@emotion/styled'

function App({ className }) {
  console.log(className)
  return (
    <div className={className}>
      Demo
    </div>
  )
}

const Fancy = styled(App)`
  color:'red';
  backgroundColor:'blue';
`
const Fancy2 = styled(App)({
  background: 'tomato',
  color: 'white'
})

function Demo() {
  return (
    <div>
      <Fancy2 />
    </div>
  )
}
export default Demo
